import DS from 'ember-data';

export default DS.Model.extend({
	name: 		DS.attr('string'),

	volunteers: DS.hasMany('user'),
	sessions: 	DS.hasMany('session')
});
