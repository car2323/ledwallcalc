class BumpersController < ApplicationController
	before_action :authenticate_user!
	def new
		@my_bumper = Bumper.new
		
		$led_idparams = params[:led_id]
		
		render "new"
	end

	def show 
       @one_bumper = Bumper.find_by(id: params[:id])
       @one_led_id = $led_idparams

    end
		
	def create	
	        @one_bumper=Bumper.new(
            :led_id => $led_idparams,
 			:description => params[:bumper][:description],
			:weight => params[:bumper][:weight],
			:height => params[:bumper][:height])
		@one_bumper.save
		redirect_to "/informations"
	end
    def destroy
    
	end
	def edit
     @one_bumper = Bumper.find_by(id: params[:id])
	end
    def  update
	  
	end
end
