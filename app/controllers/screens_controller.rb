class ScreensController < ApplicationController
	before_action :authenticate_user!
	def new
		@one_screen = Screen.new
		render "new"
	end

	def show 
       @one_screen = Screen.find_by(id: params[:id])

    end
		
	def create		
		@one_screen=Screen.new(
			:user_id => current_user.id,
			:aspectratio => params[:screen][:aspectratio],
			:width => params[:screen][:width],
			:height => params[:screen][:height])
		@one_screen.save
		redirect_to "/informations"
	end
    def destroy
        @one_screen = Screen.find_by(id: params[:id])
        if @one_screen.nil?
            render "informations"
            return
        end
		@one_screen.destroy
           redirect_to "/informations"
               
	end
	def edit
     @one_screen = Screen.find_by(id: params[:id])
	end
    def  update
	  @one_screen = Screen.find_by(id: params[:id])
      if params[:screen]!= nil
	      if @one_screen.update(
			:aspectratio => params[:screen][:aspectratio],
			:width => params[:screen][:width],
			:height => params[:screen][:height])
	            redirect_to "/informations"
	      else
            render "update"
          end
      else
       	    edit()
      end
		
	end
end