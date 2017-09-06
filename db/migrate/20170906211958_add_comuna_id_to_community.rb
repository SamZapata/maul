class AddComunaIdToCommunity < ActiveRecord::Migration[5.0]
  def change
    add_column :communities, :comuna_id, :integer
  end
end
