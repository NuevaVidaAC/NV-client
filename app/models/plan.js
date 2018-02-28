import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
	name: 		DS.attr('string'),
	url: 		DS.attr('string'),
	session: 	DS.belongsTo(),

	wa: computed('url', function() {
		let url = this.get('url');
		console.log(this.get('url'))
		// let wa = url.split('id=');
		// console.log(wa);
	})
});
