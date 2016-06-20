import Ember from 'ember';

export default Ember.Controller.extend({
  isLoggedIn: isAuthInfoInLocalStorage()
});

function isAuthInfoInLocalStorage() {
  let emberSimpleAuthObj = JSON.parse(localStorage["ember_simple_auth:session"]);
  let authObj = emberSimpleAuthObj["authenticated"];
  let keys = Object.getOwnPropertyNames(authObj)
  return !!keys.length
}
