class LedsController < ApplicationController
	before_action :authenticate_user!
	def new
		@my_led = Led.new
		render "new"
	end

	def show 
       @one_ledpanel = Led.find_by(id: params[:id])
       @bumpers = Bumper.find_by(led_id: params[:id])

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
	def edit
     @one_ledpanel = Led.find_by(id: params[:id])
	end
    def  update
	  @one_ledpanel = Led.find_by(id: params[:id])
      if params[:led]!= nil
	      if @one_ledpanel.update(
				:model => params[:led][:model],
				:brand => params[:led][:brand],
				:panelsize_w => params[:led][:panelsize_w],
	            :panelsize_h => params[:led][:panelsize_h],
				:panelweight => params[:led][:panelweight],
				:pixelmatrix_w => params[:led][:pixelmatrix_w],
				:pixelmatrix_h => params[:led][:pixelmatrix_h],
				:poweramp110 => params[:led][:poweramp110],
				:poweramp220 => params[:led][:poweramp220])
	            redirect_to "/informations"
	      else
            render "update"
          end
      else
       	    edit()
      end
		
	end
end
