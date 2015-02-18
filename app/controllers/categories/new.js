import Ember from 'ember';

export default Ember.Controller.extend({
  validationErrors: [],

  actions: {
    save: function() {
      var _this = this;
      var category = this.get('model');

      category.validate().then(function() {
        category.save().then(function() {
          _this.transitionToRoute('/');
        });
      }).catch(function() {
        _this.showErrors();
      });
    }
  },

  showErrors: function() {
    var messages = [];
    var errors = this.get('model').get('errors');

    ['title', 'amount'].forEach(function(field) {
      errors.get(field).forEach(function(error) {
        messages.push(field.capitalize() + ' ' + error);
      });
    });

    this.set('validationErrors', messages);
  },
});
