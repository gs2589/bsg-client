import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  model() {
    if ( this.controllerFor('application').isLoggedIn === true ) {
      let currentCyclist = this.store.queryRecordPath('cyclist', 'current');
      return currentCyclist;
    }
  },

  session: Ember.inject.service(),

  actions: {
    invalidateSession: function() {
       this.get('session').invalidate();
    }
  }

});