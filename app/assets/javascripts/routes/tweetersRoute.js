App.TweetersIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Tweeter.find();
  }
});

App.TweetersNewRoute = App.TweetersIndexRoute.extend({
    model: function() {
     return App.Tweeter.createRecord();
    },
    setupController: function(controller, model) {
      return controller.set('content', model);
    }
});
