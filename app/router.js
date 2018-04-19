import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('auth', { path: '/' }, function() {
    this.route('home', { path: '/' });
    this.route('sessions', function() {
      this.route('list', { path: '/' });
      this.route('detail', { path: '/:id' });
    });
    this.route('kids', function() {
      this.route('detail', { path:'/:id' });
    });
    this.route('admin', function() {
      this.route('users', function() {});
      this.route('plans');
      this.route('sessions', function() {
        this.route('detail', { path: '/:id' });
      });
    });
  });
});

export default Router;
