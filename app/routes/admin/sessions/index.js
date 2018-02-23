import Route from '@ember/routing/route';

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
		} 
	}

});
