class Comuna < ActiveRecord::Base

	#Validación de datos para crear una Comuna
	validates :name, :about, :image, :presence => true

	#Asociación, una comuna tiene varias comunidades
	has_many :community

	has_many :sites

	#Adjuntar la imagen del mapa de cada comuna
	has_attached_file :image,
	:storage => :cloudinary,
	:path => ':id/:style/:filename',
	:cloudinary_credentials => Rails.root.join("config/cloudinary.yml")
	# styles: { medium: "300x300", thumb: "100x100" }
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
