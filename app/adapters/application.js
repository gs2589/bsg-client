import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://pedal-api.herokuapp.com',
  namespace: 'api/v1'
});
