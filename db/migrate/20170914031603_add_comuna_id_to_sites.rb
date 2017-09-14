class AddComunaIdToSites < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :comuna_id, :integer
  end
end
