class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  #Se añaden los nuevos campos que se crearon y se autoriza para acceder a ellos.
  before_action :configure_permitted_parameters, if: :devise_controller?
	protected

	def configure_permitted_parameters    
		#devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name])
    devise_parameter_sanitizer.permit(:sign_up) {|u| u.permit(:username, :email, :password, :password_confirmation, :remember_me, :avatar, :avatar_cache) }
    devise_parameter_sanitizer.permit(:account_update) {|u| u.permit(:username, :password, :password_confirmation, :current_password, :first_name, :last_name, :avatar)}
	end

  #Con esta intrucción el controlador restringe el acceso hasta que el usuairo
  #inicio sesión o se registre.
  #before_action :authenticate_user!
end
