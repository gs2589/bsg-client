import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(){

    let currentCyclist = this.store.queryRecordPath('cyclist', 'current');
    return currentCyclist;
    // return this.store.findAll('ride').then((rides) =>{
    //   let id = this.get('session.data.authenticated.id')
    //   id = String(id)
    //   return rides.filter((ride) =>{
    //     return ride.get('cyclists').mapBy('id').includes(id)
    //   });
    // })

  }
});
