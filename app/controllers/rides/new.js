import Ember from 'ember';

export default Ember.Controller.extend({

  rideCreator: Ember.computed(function(){
    return this.store.queryRecordPath('cyclist', 'current')
  }),

  selectedTeams:[],
  // allCyclists: Ember.computed(function(){
  //   this.store.findAll('cycl')
  // })

  actions: {
    save(){
      
      let ride = this.get('model');
      
      ride.set("team", this.get("selectedTeams"));
      ride.save().then(()=>{
        this.transitionToRoute('rides.ride', ride);
      })



    }




  }

});