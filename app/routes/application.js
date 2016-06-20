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
    },

    authenticate: function() {
      var credentials = this.controllerFor('application').getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
      .then(()=>{
        let currentCyclist = this.store.queryRecordPath('cyclist', 'current');
        this.controller.set('model', currentCyclist);
      })
      .catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });

      this.controller.toggleProperty('isLoggedIn');
    }
  }

});