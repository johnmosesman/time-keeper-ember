import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),

  category: DS.belongsTo('category', {async: true})
});
