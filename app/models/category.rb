class Category < ActiveRecord::Base
	
	#Relationship site
	has_many :site

	validates :name, :presence => true

end
