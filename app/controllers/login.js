import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	firebaseApp: service(),
	register: false,
	showPass: false,
	actions: {
		register () {
			this.toggleProperty('register');
		},
		showPass () {
			this.toggleProperty('showPass');
		},
		createUser (email, pass, name, lastName, project) {
			const auth = this.get('firebaseApp').auth();
			auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
				const user = this.store.createRecord('user', {
					id: userResponse.uid,
					name,
					lastName,
					project,
					email: userResponse.email
				});
				return user.save().then(() => {
					$('#addUser').modal('close');
					swal(
						'Registro Completado :)',
						'',
						'success'
					);
					this.setProperties({
						name: null,
						lastName: null,
						newEmail: null,
						newPassword: null,
						project: null,
						register: false
					});
				});
			});
		}
	}
});
