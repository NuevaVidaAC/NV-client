/*global swal*/
import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
	actions: {
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
		createPlan (name, url, session) {
			let plan = this.store.createRecord('plan', {
				name,
				url,
				session
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
