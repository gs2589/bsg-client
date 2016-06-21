import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  isLoggedIn: isAuthInfoInLocalStorage(),

  actions: {
    authenticate: function(authenticator, credentials) {
      this.get('session').authenticate(authenticator, credentials)
      .then(()=>{
        let currentCyclist = this.store.queryRecordPath('cyclist', 'current');
        this.set('model', currentCyclist);
        this.set('isLoggedIn', this.get('session.isAuthenticated'));
        this.transitionToRoute('profile');
      })
      .catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    },

    register: function(signUpParams) {
      let newCyclist = this.store.createRecord('cyclist', signUpParams);

      function authenticateAfterSave(){
        let email = arguments[0].get('email');
        let password = arguments[0].get('password');
        let credentials = {identification: email, password: password};

        this.get('session').authenticate("authenticator:jwt", credentials)
        .then(()=>{
          let currentCyclist = this.store.queryRecordPath('cyclist', 'current');
          this.set('model', currentCyclist);
          this.set('isLoggedIn', this.get('session.isAuthenticated'));
          this.transitionToRoute('profile');
        })
        .catch((reason)=>{
          this.set('errorMessage', reason.error || reason);
        });
      }

      newCyclist.save().then( authenticateAfterSave.bind(this) );
    }
  }
});


function isAuthInfoInLocalStorage() {
  let emberSimpleAuthObj = JSON.parse(localStorage["ember_simple_auth:session"]);
  let authObj = emberSimpleAuthObj["authenticated"];
  let keys = Object.getOwnPropertyNames(authObj);
  return !!keys.length;
}
