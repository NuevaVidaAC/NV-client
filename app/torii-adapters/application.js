import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import { inject as service } from '@ember/service';

export default ToriiFirebaseAdapter.extend({
	store: service(),

	open (authorization) {
		let userId = authorization.uid;
		let store  = this.get('store');
		return store.find('user', userId).then((user) => {
			return {
				currentUser: user
			};
		});
	}
});