class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages_channel"
  end

  def unsubscribed
    stream_from 'messages_channel' 
  end

  def speak
  end
end
