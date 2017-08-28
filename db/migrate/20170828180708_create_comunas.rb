class CreateComunas < ActiveRecord::Migration[5.0]
  def change
    create_table :comunas do |t|
      t.string :name
      t.text :about
      t.string :enlace

      t.timestamps
    end
  end
end
