class BumpersController < ApplicationController
	before_action :authenticate_user!
	def new
		@my_bumper = Bumper.new
		render "new"
	end

	def show 
       @one_bumper = Bumper.find_by(id: params[:id])
       
    end
		
	def create		
	
	end
    def destroy
    
	end
	def edit
     @one_bumper = Bumper.find_by(id: params[:id])
	end
    def  update
	  
	end
end
