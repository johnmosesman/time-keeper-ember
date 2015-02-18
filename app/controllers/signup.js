import Ember from 'ember';

export default Ember.Controller.extend({
  validationErrors: [],

  actions: {
    signup: function() {
      var _this = this;
      var registration = this.get('model');

      this.set('validationErrors', []);

      registration.validate().then(function() {
        _this.createUser();
      }).catch(function() {
        _this.showErrors();
      });
    }
  },

  showErrors: function() {
    var messages = [];
    var errors = this.get('model').get('errors');

    ['email', 'password', 'passwordConfirmation'].forEach(function(field) {
      errors.get(field).forEach(function(error) {
        var word = (field === 'passwordConfirmation') ? 'Password confirmation' : field.capitalize();
        messages.push(word + ' ' + error);
      });
    });

    this.set('validationErrors', messages);
  },

  createUser: function() {
    var _this = this;
    var registration = this.get('model');

    Ember.$.ajax({
      type: "POST",
      url: "create_user",
      dataType: "JSON",
      data: {
        "user": {
          "email": registration.get('email'),
          "password": registration.get('password')
        }
      },
      success: function() {
        _this.get('session').authenticate('simple-auth-authenticator:devise', {
          identification: registration.get('email'),
          password: registration.get('password')
        });
      },
      error: function(data) {
        _this.set('validationErrors', ['Email ' + data.responseJSON.email[0]]);
      },
      finally: function() {
        registration.deleteRecord();
      }
    });
  },
});
