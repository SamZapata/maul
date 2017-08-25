class AddSiteIdToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :site_id, :integer
  end
end
