class TweetersController < ApplicationController


  respond_to :json

  def show
    @tweeter = Tweeter.find(params[:id])
    respond_with @tweeter
  end

end
