/*global swal*/
import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
	options: {
		yearRange: 20
	},

	actions: {
		createKid(name, lastName, dob) {
			const kid = this.store.createRecord('kid', {
				name,
				lastName,
				dob,
				photo: 'http://lorempixel.com/400/200'
			});
			kid.save().then(() => {
				$('#addKid').modal('close');
				swal(
					'Niño añadido exitosamente :)',
					'',
					'success'
				);
				this.setProperties({
					name: null,
					lastName: null,
					dob: null
				});
			});
		},
		deleteKid(kid) {
			swal({
				title: '¿Estás seguro de querer eliminar el registro?',
				text: "¡No podrás revertirlo!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				kid.destroyRecord().then(() => {
					if (result.value) {
						swal(
							'¡Borrado!',
							'El registro ha sido borrado',
							'success'
						);
					}
                });
			});
		} 
	}
});
