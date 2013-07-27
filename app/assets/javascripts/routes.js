App.Router.map(function() {
  this.route("tweeters", { path: "all" });
});

App.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
                           return this.controllerFor('application').set('currentRoute', 'home');
                             }
});

App.TweetersRoute = Ember.Route.extend({
    setupController: function(controller, model) {
                           return this.controllerFor('application').set('currentRoute', 'tweeters');
                             }
});
