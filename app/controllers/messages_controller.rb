class MessagesController < ApplicationController

  def index
    render json: { messages: Message.all, status: :ok }
  end

  def create
    respond_to do |format| 
      format.json { render json: { message: Message.create(message_params) }, status: :ok }
    end
  end

  def destroy
    respond_to do |format| 
      format.json { render json: { message: Message.find(params[:id]).delete }, status: :ok }
    end
  end

  private

  def message_params
    params.require(:message).permit(:text)
  end
end
