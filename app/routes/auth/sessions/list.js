import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	dataService: service(),

	model() {
		let model = this.modelFor('auth/sessions');
		return model;
	}
});
