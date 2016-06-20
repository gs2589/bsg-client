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
  
  this.route('rides', function() {
    this.route('ride', { path: '/:ride_id' });
    this.route('new', { path: '/new'});
  });

  

  this.route('profile');

  this.route('teams', function() {
    this.route('team', { path: '/:team_id' });
  });
});

export default Router;
