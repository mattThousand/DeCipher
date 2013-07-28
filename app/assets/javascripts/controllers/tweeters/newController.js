App.TweetersNewController = Ember.ObjectController.extend({
    headerTitle: 'Create',
    buttonTitle: 'Create',
    save: function() {
      var _this = this;
      return this.content.save().then(function() {
        return _this.transitionToRoute('index', _this.content);
      });
    }
});
