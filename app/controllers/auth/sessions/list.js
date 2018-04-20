import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	dataService: service(),

	actions: {
		createSession (name, location, date) {
			const newSession = this.store.createRecord('session', {
				name,
				location,
				date
			});
			return newSession.save().then(() => {
				$('#addSession').modal('close');
				swal(
					'Sesión creada exitosamente :)',
					'',
					'success'
				).then(() => {
					this.transitionToRoute('auth.sessions.detail', newSession.id);
				});
			});
		}
	}
});
