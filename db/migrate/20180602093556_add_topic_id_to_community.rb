class AddTopicIdToCommunity < ActiveRecord::Migration[5.0]
  def change
    add_column :communities, :topic_id, :integer
  end
end
