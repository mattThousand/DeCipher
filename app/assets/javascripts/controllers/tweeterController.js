App.TweeterController = Ember.ObjectController.extend({
  emotion: function(){
           return this.get("emotion");
           };
  polarity: function(){
            return this.get("polarity");
            };
  handle: function(){
          return this.get("handle");
          };
});
