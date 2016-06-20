class Bumper < ActiveRecord::Base
	belongs_to :led
	validates :description, :weight, :height, presence: true
end
