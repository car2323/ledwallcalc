class Screen < ActiveRecord::Base
	belongs_to :user
	validates :apectratio, :width, :height, presence: true
end
