class LedsController < ApplicationController
	before_action :authenticate_user!
	def new
		@my_user = current_user.id
		@my_led = Led.new
		render "new"
	end
end
