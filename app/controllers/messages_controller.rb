class MessagesController < ApplicationController

  def create
    respond_to do |format| 
      format.json { render json: { message: Message.create(message_params) }, status: :ok }
    end
  end

  private
:q

  def message_params
    params.require(:message).permit(:text)
  end
end
