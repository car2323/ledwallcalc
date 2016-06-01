class CreateBumpers < ActiveRecord::Migration
  def change
    create_table :bumpers do |t|
      t.references :led, index: true
      t.string :description
      t.float :weight
      t.float :height

      t.timestamps null: false
    end
  end
end
