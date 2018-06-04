class AddTopicIdToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :topic_id, :integer
  end
end
