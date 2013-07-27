class CreateTweeters < ActiveRecord::Migration
  def change
    create_table :tweeters do |t|
      t.string :twitter_handle
      t.string :emotion
      t.float :polarity

      t.timestamps
    end
  end
end
