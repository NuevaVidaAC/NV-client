import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session: service(),
	beforeModel() {
		let user = this.get('session.currentUser');
		if(!user.data.isAdmin) {
			this.transitionTo('home');
		}
	}
});
