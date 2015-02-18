import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.resource("categories", {path: '/'}, function() {
    this.route("new", {path: '/categories/new'});
    this.route("edit", {path: 'categories/:category_id/edit'});
  });
  this.route("input");
});

export default Router;
