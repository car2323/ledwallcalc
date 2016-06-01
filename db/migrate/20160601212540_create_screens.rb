class CreateScreens < ActiveRecord::Migration
  def change
    create_table :screens do |t|
      t.references :user, index: true
      t.string :aspectratio
      t.float :width
      t.float :height

      t.timestamps null: false
    end
  end
end
