class CreateMeans < ActiveRecord::Migration[5.0]
  def change
    create_table :means do |t|
      t.string :nombreRecurso
      t.string :tipo
      t.integer :Cantidad
      t.integer :Disponibilidad
      t.string :observacion
      t.integer :aportado
      t.integer :pendiente

      t.timestamps
    end
  end
end
