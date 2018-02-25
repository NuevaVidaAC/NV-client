import Controller from '@ember/controller';

export default Controller.extend({
	// session: autosave('model')
	actions: {
		update () {
			let session = this.get('model');
			session.save().then(() => {
				swal(
					'Cambios Guardados :)',
					'',
					'success'
				);
			});
		},
		createPlan (name, url, session) {
			let plan = this.store.createRecord('plan', {
				name,
				url,
				session
			})
			session.get('plans').addObject(plan);
			plan.save().then(() => {
				session.save();
			}).then(() => {	
				this.setProperties({
					name: null,
					url: null
				});
				$('#addPlan').modal('close');
				swal(
					'Planeación creada exitosamente :)',
					'',
					'success'
				);
			});
		}
	}
});
