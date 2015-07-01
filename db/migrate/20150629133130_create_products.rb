class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description
      t.float :price
      t.string :category
      t.string :photo_path
    end
  end
end
