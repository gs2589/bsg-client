import Ember from 'ember';

export default Ember.Route.extend({

model: function(){
    
    return this.store.createRecord('ride');
  },

  actions: {
    // 2
    save: function(){
        
      
      let model = this.modelFor(this.routeName);
      // 4
      //this.store.createRecord()
      model.save();
      this.transitionTo('rides');
    }
  }

  
  });