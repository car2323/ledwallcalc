class Led < ActiveRecord::Base
	belongs_to :user
	has_many :bumper
end
