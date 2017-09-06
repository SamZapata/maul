Rails.application.routes.draw do
  
  resources :comunas
  
  resources :events

  resources :sites
  resources :sites do
  	collection do
  		get 'comunidades'
  	end
  end

  resources :communities
  devise_for :users

  get 'home/index'  
  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
