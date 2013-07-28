App.Tweeter = DS.Model.extend({
  handle: DS.attr('string'),
  emotion: DS.attr('string'),
  polarity: DS.attr('number')
});
