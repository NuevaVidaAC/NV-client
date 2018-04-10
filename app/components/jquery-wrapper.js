import Component from '@ember/component';

export default Component.extend({
	tagName: 'span',
	query: null,
	method: null,
	options: {},
	didInsertElement () {
		var query = this.get('query');
		var method = this.get('method');
		var options = this.get('options');
		this.$(query)[method](Object.assign({}, options));
	}
});
