class InformationsController < ApplicationController
	before_action :authenticate_user!
	def index
		@leds = Led.all
		@screens = Screen.all
	end

end
