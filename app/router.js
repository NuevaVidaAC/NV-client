import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('home', { path:'/' });
  this.authenticatedRoute('plans');
  this.authenticatedRoute('admin', function() {
    this.route('users', function() {});
    this.route('plans', function() {});
    this.route('sessions', function() {
      this.route('detail', { path: '/:id' });
    });
  });
});

export default Router;
