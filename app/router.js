import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/');
  this.route('login');
  this.route('cyclists', function() {
    this.route('cyclist', { path: '/:cyclist_id' });
  });
});

export default Router;
