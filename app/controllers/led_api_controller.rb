class LedApiController < ApplicationController
	def show
        one_led = Led.find_by(id: params[:id])
        if one_led.nil?
            return
        end
        one_led_bumper = one_led.bumper.find_by(led_id: params[:id])
        render json: one_led.to_json, status: 201
    end
end