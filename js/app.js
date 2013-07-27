App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.resource('tweeters'); // /#/tweeters
});

App.TweetersRoute = Ember.Route.extend({
  model: function() {
    return App.Tweeter.find();
  }
});

App.TweetersController = Ember.ArrayController.extend();

// Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Tweeter = DS.Model.extend();

App.Tweeter.FIXTURES = [
  {id:1},
  {id:2},
  {id:3},
  {id:4}
];
