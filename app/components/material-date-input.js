import Component from '@ember/component';

export default Component.extend({
	dateOpts: {
		i18n: {
			months: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
			monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
			weekdays: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
			weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
			weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"],
			today: 'hoy',
			cancel: 'cerrar',
			done: 'aceptar',
		},
		format: 'dd/mm/yyyy'
	},

	didInsertElement () {
		this._super(...arguments);
		let options = this.get('dateOpts');
		this.$('.datepicker').datepicker(options);
	}
});
