class Tweeter < ActiveRecord::Base
  attr_accessible :emotion, :polarity, :handle
end
