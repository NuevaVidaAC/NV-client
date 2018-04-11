import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default Route.extend({
	dataService: service(),

	model() {
		let model = this.modelFor('auth/sessions');
		return model;
	},

	// setupController(controller) {
	// 	this._super(...arguments);
	// 	let wa = this.controllerFor('auth/sessions').get('selected');
	// 	controller.set('wa', wa);
	// }
});
