import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin, {
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),

  validations: {
    email: {
      presence: true,
      format: { with: /^.*@.*$/, allowBlank: false, message: 'must be valid' }
    },
    password: {
      length: { minimum: 8 },
      confirmation: { message: 'must match'}
    },
    passwordConfirmation: {
      presence: true
    }
  },
});
