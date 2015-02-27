import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: config.host,
  namespace: "api"
});
