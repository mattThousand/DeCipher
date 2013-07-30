class TweetersController < ApplicationController

  def index
    @tweeters = Tweeter.all
    render :json @tweeters
  end

  def show
    @tweeter = Tweeter.find(params[:id])
    render :json @tweeter
  end

  def create
    @tweeter = Tweeter.new(params[:tweeter])

    if @tweeter.save
      render :json @user
    else
      render :json @user, status: 422
    end
  end
  

end
