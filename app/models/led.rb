class Led < ActiveRecord::Base
	belongs_to :user
	has_many :bumper
	validates :model, :brand, :panelsize_w, :panelsize_h, :panelweight, :pixelmatrix_w, :pixelmatrix_h, :poweramp110, :poweramp220, presence: true
end
