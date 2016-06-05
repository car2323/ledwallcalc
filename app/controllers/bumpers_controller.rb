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
        @one_bumper = Bumper.find_by(id: params[:id])
        if @one_bumper.nil?
            render "informations"
            return
        end
		@one_bumper.destroy
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
