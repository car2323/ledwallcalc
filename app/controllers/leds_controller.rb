class LedsController < ApplicationController
	before_action :authenticate_user!
	def new
		@my_led = Led.new
		render "new"
	end

	def show 
       @one_ledpanel = Led.find_by(id: params[:id])

    end
		
	def create		
		@my_ledpanel=Led.new(
			:user_id => current_user.id,
			:model => params[:led][:model],
			:brand => params[:led][:brand],
			:panelsize_w => params[:led][:panelsize_w],
            :panelsize_h => params[:led][:panelsize_h],
			:panelweight => params[:led][:panelweight],
			:pixelmatrix_w => params[:led][:pixelmatrix_w],
			:pixelmatrix_h => params[:led][:pixelmatrix_h],
			:poweramp110 => params[:led][:poweramp110],
			:poweramp220 => params[:led][:poweramp220])
		@my_ledpanel.save
		redirect_to "/informations"
	end
    def destroy
        @one_ledpanel = Led.find_by(id: params[:id])
        if @one_ledpanel.nil?
            render "informations"
            return
        end
		@one_ledpanel.destroy
           redirect_to "/informations"
               
	end
    def  edit
	  @one_ledpanel = Led.find_by(id: params[:id])
	end
end
