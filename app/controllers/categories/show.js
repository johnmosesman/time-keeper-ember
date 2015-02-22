import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      if (confirm("Delete this category?")) {
        this.get('model').destroyRecord();
      }
    }
  }
});
