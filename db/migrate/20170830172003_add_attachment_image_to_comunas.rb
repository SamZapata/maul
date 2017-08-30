class AddAttachmentImageToComunas < ActiveRecord::Migration
  def self.up
    change_table :comunas do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :comunas, :image
  end
end
