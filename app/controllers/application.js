import Ember from 'ember';

export default Ember.Controller.extend({
  isLoggedIn: isAuthInfoInLocalStorage(),

  session: Ember.inject.service(),

  actions: {
    authenticate: function(authenticator, credentials) {
      this.get('session').authenticate(authenticator, credentials)
      .then(()=>{
        let currentCyclist = this.store.queryRecordPath('cyclist', 'current');
        this.set('model', currentCyclist);
        this.transitionToRoute('profile');
      })
      .catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });

      this.toggleProperty('isLoggedIn');
    }
  }
});

function isAuthInfoInLocalStorage() {
  let emberSimpleAuthObj = JSON.parse(localStorage["ember_simple_auth:session"]);
  let authObj = emberSimpleAuthObj["authenticated"];
  let keys = Object.getOwnPropertyNames(authObj);
  return !!keys.length;
}
