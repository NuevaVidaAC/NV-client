import Controller from '@ember/controller';

export default Controller.extend({
	register: false,
	actions: {
		register () {
			this.toggleProperty('register');
		}
	}
});
