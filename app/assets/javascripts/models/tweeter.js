App.Tweeter = DS.Model.extend({
  twitter_handle: DS.attr('string'),
  emotion: DS.attr('string'),
  polarity: DS.attr('number')
});
