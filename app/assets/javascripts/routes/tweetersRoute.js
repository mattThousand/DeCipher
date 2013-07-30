App.TweetersIndexRoute = Ember.Route.extend({
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

