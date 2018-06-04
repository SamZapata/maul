class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    drop_table :categories
    create_table :categories do |t|
      t.string :name
      t.text :about
      t.integer :subcategory_id

      t.timestamps
    end
  end
end
