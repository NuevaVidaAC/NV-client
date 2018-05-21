/* global swal */
import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		createProject (name) {
			this.store.createRecord('project', { name }).save().then(() => {
				$('#addUser').modal('close');
				swal(
					'El proyecto ha sido creado :)',
					'',
					'success'
				);
				this.set('name', '');
			})
		},
		deleteProject (project) {
			swal({
				title: '¿Estás seguro de querer borrar el proyecto?',
				// text: "Todas las planeaciones serán borradas ¡No podrás revertirlo!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				if (result.value) {
					project.destroyRecord()
					swal(
						'¡Borrado!',
						'El proyecto ha sido borrado',
						'success'
					);
				}
			});
		}
	}
});
