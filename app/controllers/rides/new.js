import Ember from 'ember';

export default Ember.Controller.extend({

  rideCreator: Ember.computed(function(){
    return this.store.queryRecordPath('cyclist', 'current');
  }),

  selectedTeams:[],

  actions: {
    save(){
      
      let ride = this.get('model');
      ride.set("team", this.get("selectedTeams").get('firstObject'));
      ride.save().then(()=>{
        this.transitionToRoute('rides.ride', ride);
      })



    }




  }

});