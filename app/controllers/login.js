import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	firebaseApp: service(),
	register: false,
	showPass: false,
	projects: [],
	actions: {
		register () {
			this.toggleProperty('register');
		},
		showPass () {
			this.toggleProperty('showPass');
		},
		createUser (email, pass, name, lastName, projects) {
			const auth = this.get('firebaseApp').auth();
			auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
				const user = this.store.createRecord('user', {
					id: userResponse.uid,
					name,
					lastName,
					email: userResponse.email
				});
				user.get('projects').addObjects(projects);
				projects.forEach((project) => project.get('volunteers').addObject(user));
				return user.save().then(() => {
					projects.forEach((project) => project.save());
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
		},
		addProject (project) {
			let projects = this.get('projects');
			projects.addObject(project);
			console.log(projects);
		},
		removeProject (project) {
			let projects = this.get('projects');
			projects.removeObject(project);
			console.log(projects);
		}
	}
});
