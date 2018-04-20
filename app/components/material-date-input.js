import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default Component.extend({
	moment: service(),
	value: null,

	dateOpts: {
		i18n: {
			months: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
			monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
			weekdays: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
			weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
			weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"],
			today: 'hoy',
			clear: 'borrar',
			done: 'aceptar'
		},
		format: 'dd/mm/yyyy',
		yearRange: [1998, 2024],
		container: 'body'
	},

	didInsertElement () {
		this._super(...arguments);
		let options = this.get('dateOpts');
		this.$('.datepicker').datepicker(options);
	},

	actions: {
		value: computed('val', {
		get (/*key*/) {
			let val = this.get('val');
			return val;
		},
		set (key, newVal) {
			let val = moment(newVal, 'dd/mm/yyyy');
			this.set('val', val);
		}
	}),
	}
});
