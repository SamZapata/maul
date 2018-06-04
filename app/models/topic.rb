class Topic < ActiveRecord::Base
	
	validates :name, :presence => true	

	#Relationship community
	has_many :community

	#Relationship event
	has_many :event

	#Relationship with one or more topics
	#has_many :topicsevent
	#has_many :event,
	#:trought => :topicsevent


end
