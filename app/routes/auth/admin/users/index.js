/*global swal*/
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
	firebaseApp: service(),

	model () {
		return this.store.findAll('user');
	},

	actions: {
		createUser(email, pass, name, lastName, isAdmin) {
			const auth = this.get('firebaseApp').auth();
			auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
				const user = this.store.createRecord('user', {
					id: userResponse.uid,
					name,
					lastName,
					isAdmin,
					email: userResponse.email
				});
				return user.save().then(() => {
					$('#addUser').modal('close');
					swal(
						'Usuario creado exitosamente :)',
						'',
						'success'
					);
					this.get('controller').setProperties({
						name: null,
						lastName: null,
						email: null,
						pass: null,
						isAdmin: null
					});
				});
			});
		}
	}
});
