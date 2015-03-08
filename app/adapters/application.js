import DS from 'ember-data';
// import config from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  // host: 'http://localhost:3000',
  namespace: "api"
});
