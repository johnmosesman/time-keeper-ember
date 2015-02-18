import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin, {
  title: DS.attr('string'),
  amount: DS.attr('number'),

  records: DS.hasMany('record'),

  validations: {
    title: {
      presence: true
    },
    amount: {
      presence: true,
      numericality: true
    }
  }
});
