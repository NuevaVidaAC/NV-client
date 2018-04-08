import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session: service(),
	firebase: service(),
	
	beforeModel() {
		if (this.get('session.content.isAuthenticated')) {
			this.transitionTo('auth.home');
		}
	},

	actions: {
		login(email, password) {
			this.get('session').open('firebase', {
				provider: 'password',
				email,
				password
			}).then(() => {
				this.set('controller.email', null);
				this.set('controller.password', null);
				this.transitionTo('auth.home');
			}).catch((error) => {
				alert(error);
			});
		}
	}
});
