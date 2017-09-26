class MessagesController < ApplicationController

  def create
    Message.create(params)
  end

  private

  def message_params
    params.require(:message).permit(:text)
  end
end
