import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.getData();
  },

  getData: function() {
    return Ember.$.ajax({
      type: "GET",
      url: "api/charts",
      dataType: "JSON",
      success: function(data) {
        console.log(data.charts);
        // return data.charts;
      },
      error: function(data) {
        console.log(data);

       // TODO
       return [];
      }
    });
  }
});
