# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user_row1=User.create(name: "Carlos1", email: "ccardo29@hotmail.com", password: "carlos123")
	
user_row2=User.create(name: "Pedro2", email: "pedro@hotmail.com", password: "pedro123")
	
user_row3=User.create(name: "Gustavo3", email: "gustavo@hotmail.com", password: "gustavo123")

#-----------------------------------------------------------------------------------------------

one_led_row1=user_row1.led.create(model: "A3PRO", brand: "absen", 
	panelsize_w: 1.8, panelsize_h: 1.8, panelweight: 22, 
	pixelmatrix_w: 128, pixelmatrix_h: 128, poweramp110: 0.8, poweramp220: 0.4 
)
one_led_row2=user_row1.led.create(model: "A5PRO", brand: "absen", 
	panelsize_w: 1.5, panelsize_h: 1.5, panelweight: 25, 
	pixelmatrix_w: 125, pixelmatrix_h: 125, poweramp110: 0.5, poweramp220: 0.25 
)

#-----------------------------------------------------------------------------------------------

 one_led_row1.bumper.create(description: "factory bumper", weight: 50, height: 24)

 one_led_row1.bumper.create(description: "factory bumper", weight: 25, height: 12)

#-----------------------------------------------------------------------------------------------

user_row1.screen.create(aspectratio: "4:3", width: 6, height: 8)
user_row1.screen.create(aspectratio: "4:3", width: 7.5, height: 10)
user_row1.screen.create(aspectratio: "4:3", width: 9, height: 12)
user_row1.screen.create(aspectratio: "4:3", width: 10.5, height: 14)
