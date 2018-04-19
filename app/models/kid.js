import DS from 'ember-data';
import moment from 'moment';
import { computed } from '@ember/object';

export default DS.Model.extend({
	name: 		DS.attr('string'),
	lastName: 	DS.attr('string'),
	dob: 		DS.attr('string'),
	photo: 		DS.attr('string'),

	fullName: computed('name', 'lastName', function() {
		let name = this.get('name');
		let lastName = this.get('lastName');

		return `${name} ${lastName}`;
	}),

	age: computed ('dob', function () {
		let dob = moment(this.get('dob'), 'D/M/YYYY');
		let age = moment().diff(dob, 'years', false);		
		return age;
	})
});

