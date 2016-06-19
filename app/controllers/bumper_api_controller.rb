class BumperApiController < ApplicationController
	def show
		
        all_bumpers = Bumper.where(led_id: params[:id])
        if all_bumpers.nil?
            return
        end
   
        render json: all_bumpers.to_json, status: 201
    end
end