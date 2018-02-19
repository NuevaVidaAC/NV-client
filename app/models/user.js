import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	lastName: 		DS.attr('string'),
	email: 			DS.attr('string'),
	isAdmin: 		DS.attr('boolean'),

	fullName: computed('name', 'lastName', function() {
		let name = this.get('name');
		let lastName = this.get('lastName');

		return `${name} ${lastName}`;
	})
});
