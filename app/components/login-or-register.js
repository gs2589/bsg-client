import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitLoginForm() {
      let credentials = this.controller.getProperties('identification', 'password');
      let authenticator = 'authenticator:jwt';
      this.attrs.login(authenticator, credentials);
    },

    submitSignupForm() {
      let signUpParams = this.controller.getProperties('name', 'email', 'password', 'password_confirmation');
      if (signUpParams.password !== signUpParams.password_confirmation) {
        alert("Password and password confirmation don't match!")
      } else {
        this.attrs.signup(signUpParams);
      }
    },

    toggleSignupForm() {
      this.toggleProperty('isSigningUp');
    }
  }
});
