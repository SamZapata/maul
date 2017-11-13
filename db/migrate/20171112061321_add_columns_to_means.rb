class AddColumnsToMeans < ActiveRecord::Migration[5.0]
  def change
    add_column :means, :nombreRecurso, :string
    add_column :means, :TipoRecurso, :string
    add_column :means, :Cantidad, :integer
    add_column :means, :Disponibilidad, :integer
    add_column :means, :observacion, :string
    add_column :means, :aportado, :integer
    add_column :means, :pendiente, :integer
  end
end
