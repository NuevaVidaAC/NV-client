/*global swal*/
import Controller from '@ember/controller';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Controller.extend({
	fileTypes: ['Subir Archivo', 'Documento Drive'],
	firebaseApp: service(),
	docUrl: null,

	actions: {
		setDocUrl (url) {
			this.set('docUrl', url);
		},
		update () {
			let session = this.get('model');
			session.save().then(() => {
				swal(
					'Cambios Guardados :)',
					'',
					'success'
				);
			});
		},
		createPlan (name, startHour, endHour, fileType, url, session) {
			if (fileType === 'Subir Archivo') {
				let storageRef = this.get('firebaseApp');
				let file = document.getElementById('wa').files[0];
				let upload = storageRef.storage().ref().child(file.name).put(file);
				upload.then(() => {
					let plan = this.store.createRecord('plan', {
						name,
						session,
						startHour,
						endHour,
						url: upload.snapshot.downloadURL
					});
					session.get('plans').addObject(plan);
					plan.save().then(() => {
						session.save();
					}).then(() => {	
						this.setProperties({
							name: null,
							url: null
						});
						$('#addPlan').modal('close');
						swal(
							'Planeación creada exitosamente :)',
							'',
							'success'
						);
					});
				});
			} else {
				let plan = this.store.createRecord('plan', {
					name,
					session,
					startHour,
					endHour,
					url
				});
				session.get('plans').addObject(plan);
				plan.save().then(() => {
					session.save();
				}).then(() => {	
					this.setProperties({
						name: null,
						url: null
					});
					$('#addPlan').modal('close');
					swal(
						'Planeación creada exitosamente :)',
						'',
						'success'
					);
				});
			}
		},
		deletePlan(plan) {
			swal({
				title: '¿Estás seguro de querer borrar la planeación?',
				text: "¡No podrás revertirlo!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				if (result.value) {
					plan.destroyRecord().then(() => {
						swal(
							'¡Borrado!',
							'La planeación ha sido borrada',
							'success'
						);
					});
                }
			});
		}
	}
});
