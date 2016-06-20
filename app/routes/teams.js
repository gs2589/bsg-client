import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let currentCyclist = this.store.queryRecordPath('cyclist', 'current');
    return currentCyclist;
  }
});

