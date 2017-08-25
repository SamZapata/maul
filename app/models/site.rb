class Site < ActiveRecord::Base
	
	#Validación, todo sitio debe tener mínimo un nombre y descripción
	validates :name, :about, :presence => true

	#Asociación, un sitio puede estar asociado a una o más comunidades
	has_many :community

	has_attached_file :avatar, styles: { medium: "300x300", thumb: "100x100" }
  	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  
end
