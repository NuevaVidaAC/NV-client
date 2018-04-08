import Route from '@ember/routing/route';
import $ from 'jquery';
import RSVP from 'rsvp';

export default Route.extend({
	model () {
		return this.store.findAll('session');
	},

	actions: {
		createSession (name, location) {
			const newSession = this.store.createRecord('session', {
				name,
				location
			});
			return newSession.save().then(() => {
				$('#addSession').modal('close');
				swal(
					'Sesión creada exitosamente :)',
					'',
					'success'
				).then(() => {
					this.transitionTo('admin.sessions.detail', newSession.id);
				});
			})
		},
		deleteSession(session) {
			swal({
				title: '¿Estás seguro de querer borrar la sesión?',
				text: "Todas las planeaciones serán borradas ¡No podrás revertirlo!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				let deletions = session.get('plans').map(function(plan) {
					return plan.destroyRecord();
				});
				RSVP.all(deletions).then(function() {
					return session.destroyRecord();
				}).then(() => {
					if (result.value) {
						swal(
							'¡Borrado!',
							'La sesión ha sido borrada',
							'success'
						);
					}
                });
			});
		} 
	}

});
