/*global swal*/
import Controller from '@ember/controller';
import $ from 'jquery';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import moment from 'moment';
import { computed } from '@ember/object';
 
export default Controller.extend({	
	dataService: service(),

	dates: computed('model', function() {
		let data = this.get('model');
		let mappedData = data.mapBy('date');
		return mappedData;
	}),

	selected: moment(),
	actions: {
		deleteSession(session) {
			swal({
				title: '¿Estás seguro de querer borrar la sesión?',
				text: "Todas las planeaciones serán borradas ¡No podrás revertirlo!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				let deletions = session.get('plans').map(function(plan) {
					return plan.destroyRecord();
				});
				RSVP.all(deletions).then(function() {
					return session.destroyRecord();
				}).then(() => {
					if (result.value) {
						swal(
							'¡Borrado!',
							'La sesión ha sido borrada',
							'success'
						);
					}
                });
			});
		},
		setDate (day) {
			this.set('selected', day);
			this.set('dataService.date', day);
			let data = this.get('model');
			let date = moment(day).format('D/M/YYYY');
			let filteredData = data.filterBy('date', date);
			this.set('dataService.data', filteredData);
			this.transitionToRoute('/sessions/');
		} 
	}
});
