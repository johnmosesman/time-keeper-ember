import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function() {
      if (confirm("Delete this category?")) {
        this.get('category').destroyRecord();
      }
    }
  }
});
