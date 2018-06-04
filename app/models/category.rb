class Category < ActiveRecord::Base
	
	validates :name, :presence => true
	
	#Relationship with site
	has_many :site

end
