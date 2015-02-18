import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params);
    this.store.find('category', params.category_id).then(function(te ) {
      console.log(te);
    });
  }
});
