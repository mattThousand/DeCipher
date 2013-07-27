class TweetersController < ApplicationController


  respond_to :json

  def index
    @tweeters = Tweeter.all
    respond_with @tweeters
  end

  def show
    @tweeter = Tweeter.find(params[:id])
    respond_with @tweeter
  end

end
