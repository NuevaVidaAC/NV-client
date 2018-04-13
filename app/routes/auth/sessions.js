import Route from '@ember/routing/route';
import moment from 'moment';
import { inject as service } from '@ember/service';

export default Route.extend({
	dataService: service(),

	model () {
		return this.store.findAll('session');
	},

	setupController (controller, model) {
		this._super(...arguments);
		let date = moment().format('D/M/YYYY');
		let filteredData = model.filterBy('date', date);
		this.set('dataService.data', filteredData);
	}
});
