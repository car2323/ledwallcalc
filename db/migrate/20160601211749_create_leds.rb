class CreateLeds < ActiveRecord::Migration
  def change
    create_table :leds do |t|
      t.references :user, index: true
      t.string :model
      t.string :brand
      t.float :panelsize_w
      t.float :panelsize_h
      t.float :panelweight
      t.float :pixelmatrix_w
      t.float :pixelmatrix_h
      t.float :poweramp110
      t.float :poweramp220

      t.timestamps null: false
    end
  end
end
