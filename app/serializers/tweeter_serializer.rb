class TweeterSerializer < ActiveModel::Serializer
  attributes :id, :handle, :emotion, :polarity
end
