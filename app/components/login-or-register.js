import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitLoginForm() {
      let credentials = this.controller.getProperties('identification', 'password');
      let authenticator = 'authenticator:jwt';
      this.attrs.login(authenticator, credentials);
    }
  }
});
