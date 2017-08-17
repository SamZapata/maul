class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.text :about
      t.date :fecha
      t.time :hora
      t.string :sitio
      t.string :estado

      t.timestamps
    end
  end
end
