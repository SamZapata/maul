class CreateTopicsevents < ActiveRecord::Migration[5.0]
  def change
    create_table :topicsevents do |t|
      t.integer :event_id
      t.integer :topic_id

      t.timestamps
    end
  end
end
