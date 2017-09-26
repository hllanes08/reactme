# == Schema Information
#
# Table name: commentables
#
#  id         :integer          not null, primary key
#  name       :string
#  avatar     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Commentable < ApplicationRecord
end
