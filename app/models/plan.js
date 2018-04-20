import DS from 'ember-data';
// import { computed } from '@ember/object';

export default DS.Model.extend({
	name: 		DS.attr('string'),
	url: 		DS.attr('string'),
	file: 		DS.attr('string'),
	startHour: 	DS.attr('string'),
	endHour: 	DS.attr('string'),
	session: 	DS.belongsTo(),

	// urlId: computed('url', function() {
	// 	let url = `${this.get('url')}`;
	// 	let urlId = url.split('id=');
	// 	return `${urlId[1]}`;
	// })
});
