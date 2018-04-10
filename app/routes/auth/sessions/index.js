import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default Route.extend({
	moment: service(),

	model() {
		return this.store.findAll('session');
	},

	afterModel() {
		this._super(...arguments);
		let wa = moment('17 03 2018', 'D MM YYYY');
		console.log(wa.format('D MMMM YYYY'));
	}
});
