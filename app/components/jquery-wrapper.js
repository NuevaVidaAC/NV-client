import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
	tagName: 'span',
	query: 'a',
	method: 'sideNav',
	options: {},
	didInsertElement () {
		var query = this.get('query');
		var method = this.get('method');
		var options = this.get('options');
		$(query)[method](options);
	}
});
