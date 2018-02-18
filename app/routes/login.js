import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session: service(),
	firebase: service(),
	actions: {
		login(email, password) {
			this.get('session').open('firebase', {
				provider: 'password',
				email,
				password
			}).then(() => {
				this.set('controller.email', null);
				this.set('controller.password', null);
				this.transitionTo('home');
			}).catch((error) => {
				alert(error);
			});
		}
	}
});
