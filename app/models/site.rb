class Site < ActiveRecord::Base
	
	#Validación, todo sitio debe tener mínimo un nombre y descripción
	validates :name, :about, :presence => true

	#Asociación, un sitio puede estar asociado a una o más comunidades
	has_many :community

	#Se declara la asociación, un sitio esta referenciada a una comuna
	belongs_to :comuna

	has_attached_file :avatar, 
	:storage => :cloudinary,
	:path => ':id/:style/:filename',
	:cloudinary_credentials => Rails.root.join("config/cloudinary.yml"), 
	styles: { medium: "300x300", thumb: "100x100" }
  	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  	def ver_comunidades
  		sit_com = @site.community.select(:name).map(&:name)
  	end
  
end
