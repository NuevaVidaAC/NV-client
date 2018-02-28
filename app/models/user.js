import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	lastName: 		DS.attr('string'),
	email: 			DS.attr('string'),
	isAdmin: 		DS.attr('boolean', { default: false }),

	fullName: computed('name', 'lastName', function() {
		let name = this.get('name');
		console.log(name)
		let lastName = this.get('lastName');

		return `${name} ${lastName}`;
	})
});
