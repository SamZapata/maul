class Topicsevent < ActiveRecord::Base
	belongs_to :event
	belongs_to :topic
end
