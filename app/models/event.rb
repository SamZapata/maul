class Event < ActiveRecord::Base

	#Validación de los campos requeridos para crear un evento
	validates :name, :about, :fecha, :hora, :site_id, :presence => true

	#Asociación de un evento a un sitio
	belongs_to :site

	#Añadir avatar o imagen del evento
	has_attached_file :image, 
	:storage => :cloudinary,
	:path => ':id/:style/:filename',
	:cloudinary_credentials => Rails.root.join("config/cloudinary.yml")
	#styles: { medium: "300x300", thumb: "100x100" }
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end