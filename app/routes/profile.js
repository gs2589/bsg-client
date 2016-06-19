import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.queryRecord('cyclist', {'get_current_cyclist': 'true'});
  }
});
