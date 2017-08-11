class CreateCommunities < ActiveRecord::Migration[5.0]
  def change
    create_table :communities do |t|
      t.string :name,	null: false, default: ""
      t.text :about,	null: false
      t.text :contacto

      t.timestamps
    end    
  end
end
