class HomeController < ApplicationController
  def index
  end

  def inputs
  end

  def menus
  end

  def messages
  end

  def comments
    @commentable = Commentable.first
  end
end
