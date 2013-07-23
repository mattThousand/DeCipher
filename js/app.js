App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Router.map(function() {
  this.route('tweeters');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['thing1', 'thing2', 'thing3'];
  }
});

App.TweetersRoute = Ember.Route.extend({
  model: function() {
    return App.Tweeter.find();
  }
});

var attr = DS.attr;

App.Tweeter = DS.Model.extend({
  twitter_handle: attr('string'),
  emotion: attr('string'),
  polarity: attr('number')
});
