/* global swal */
import Controller from '@ember/controller';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Controller.extend({
	dataService: service(),
	session: service(),

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
