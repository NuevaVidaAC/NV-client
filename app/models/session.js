import DS from 'ember-data';

export default DS.Model.extend({
	name: 				DS.attr('string'),
	location: 			DS.attr('string'),
	date: 	 			DS.attr({ defaultValue: null}),
	startHour: 			DS.attr({ defaultValue: null}),
	endHour: 			DS.attr({ defaultValue: null})
});
