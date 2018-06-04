class AddCategoryIdToSites < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :category_id, :integer
  end
end
