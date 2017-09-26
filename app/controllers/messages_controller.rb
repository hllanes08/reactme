class MessagesController < ApplicationController

  def create 
    render json: { message: Message.create(message_params) }, status: :ok
  end

  private

  def message_params
    params.require(:message).permit(:text)
  end
end
