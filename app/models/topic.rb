class Topic < ActiveRecord::Base
	
	#Relationship community
	has_many :community

	validates :name, :presence => true	

end
