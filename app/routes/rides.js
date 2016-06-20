import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(){

    return this.modelFor('application');
    // return this.store.findAll('ride').then((rides) =>{
    //   let id = this.get('session.data.authenticated.id')
    //   id = String(id)
    //   return rides.filter((ride) =>{
    //     return ride.get('cyclists').mapBy('id').includes(id)
    //   });
    // })

  }
});
