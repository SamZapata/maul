class CreateSites < ActiveRecord::Migration[5.0]
  def change
    create_table :sites do |t|
      t.string :name
      t.text :about
      t.string :adress
      t.string :phone

      t.timestamps
    end
  end
end
