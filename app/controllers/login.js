// this file gets the credentials from the form and it
// and it calls on ___ to ultimately send the authentication
// request to the rails server
//

import Ember from 'ember';
export default Ember.Controller.extend({  
  session: Ember.inject.service(),
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});