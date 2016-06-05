class BumpersController < ApplicationController
	before_action :authenticate_user!
	def new
		@my_bumper = Bumper.new
		@my_led = Led.new
		render "new"
	end

	def show 
       @one_bumper = Bumper.find_by(id: params[:id])
       
    end
		
	def create	
		    puts "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
	        puts params[:bumper]
	        puts params[:led]
	        puts "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
	     @one_bumper=Bumper.new(
          
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
