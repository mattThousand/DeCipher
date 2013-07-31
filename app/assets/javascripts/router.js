App.Router.map(function() {
  this.resource("tweeters", function() {
    this.route("new");
    this.route("index");
    this.route("show", {path: "/:tweeter_id"})
  });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentRoute', 'home');
  }
});

