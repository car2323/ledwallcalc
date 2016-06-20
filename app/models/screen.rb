class Screen < ActiveRecord::Base
	belongs_to :user
	validates :aspectratio, :width, :height, presence: true
end
