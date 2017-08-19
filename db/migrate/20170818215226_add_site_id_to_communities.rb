class AddSiteIdToCommunities < ActiveRecord::Migration[5.0]
  def change
    add_column :communities, :site_id, :integer
  end
end
