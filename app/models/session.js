import DS from 'ember-data';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	location: 		DS.attr('string'),
	date: 	 		DS.attr('string', { defaultValue: null}),
	startHour: 		DS.attr('string', { defaultValue: null}),
	endHour: 		DS.attr('string', { defaultValue: null}),

	plans: 			DS.hasMany({ async: true }),
	project: 		DS.belongsTo('project')
});
