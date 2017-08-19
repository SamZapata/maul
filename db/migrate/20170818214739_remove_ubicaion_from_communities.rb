class RemoveUbicaionFromCommunities < ActiveRecord::Migration[5.0]
  def change
    remove_column :communities, :ubicacion, :string
  end
end
