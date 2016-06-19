class LedApiController < ApplicationController
	def show
        one_led = Led.find_by(id: params[:id])
        if one_led.nil?
            return
        end
        render json: one_led.to_json, status: 201
    end
end