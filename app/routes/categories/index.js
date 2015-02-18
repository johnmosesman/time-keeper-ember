import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('category');
  },

  actions: {
    delete: function(category) {
      console.log(category);
    }
  }
});
