class Tweeter < ActiveRecord::Base
  attr_accessible :emotion, :polarity, :twitter_handle
end
