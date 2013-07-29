App.Router.map(function() {
  this.resource("tweeters", { path: "all" }, function() {
    this.route("new");
    this.route("show", {path: "/:tweeter_id"})
  });
});

App.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
                           return this.controllerFor('application').set('currentRoute', 'home');
                             }
});

App.TweetersRoute = Ember.Route.extend({
  model: function() {
          return App.Tweeter.find();
         },
  setupController: function(controller, model) {
          return this.controllerFor('application').set('currentRoute', 'tweeters');
         }
});

App.TweetersNewRoute = App.TweetersRoute.extend({
  model: function() {
         return App.Tweeter.createRecord();
         },
  setupController: function() {
          return controller.set('content', model);          
         }
});
