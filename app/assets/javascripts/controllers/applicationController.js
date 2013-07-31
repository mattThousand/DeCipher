App.ApplicationController = Ember.Controller.extend({
  atIndex: (function() {
    return this.get('currentRoute') === 'index';
  }).property('currentRoute'),
  atTweeters: (function() {
    return this.get('currentRoute') === 'tweeters';
  }).property('currentRoute')
});

