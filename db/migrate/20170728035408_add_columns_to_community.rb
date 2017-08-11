class AddColumnsToCommunity < ActiveRecord::Migration[5.0]
  def change
    add_column :communities, :email, :string
    add_column :communities, :facebook, :string
    add_column :communities, :twitter, :string
    add_column :communities, :ubicacion, :string    
  end   
end
