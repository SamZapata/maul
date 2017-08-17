class Community < ActiveRecord::Base
	
	#Se declara la asociación, una comunidad esta referenciada a un sitio
	belongs_to :site
	
	include ActiveModel::AttributeAssignment
	#Declaración para validar los campos obligatorios
	#attr_accessor => metodo getter/setter
	#attr_accessor :name
	validates :name, :about, :presence => true	

	has_attached_file :avatar, styles: { medium: "300x300", thumb: "100x100" }
  	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

end
