App.TweetersNewController = Ember.ObjectController.extend({
    save: function() {
      this.get('store').commit();
      this.transitionToRoute('tweeters.index');
      },
    cancel: function() {
      this.content.deleteRecord();
      this.transitionToRoute('tweeters.index');
      }
});
