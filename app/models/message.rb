# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  text       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  after_create :send_notifications

  def send_notifications
    ActionCable.server.broadcast('messages_channel', self.text)
  end
end
