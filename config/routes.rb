Rails.application.routes.draw do
  
  resources :categories
  #Routes section presentation project
  get 'project/index'
  get 'project/about'
  get 'project/information'
  get 'project/terms-of-services'

  resources :topics
  resources :means
  get 'means/_form'

  get 'means/list'

  get 'user/show'

  resources :comunas
  resources :comunas, :id do
  	collection do
  		get 'comunidades'
  	end
  end

  resources :events

  resources :sites
  resources :sites do
  	collection do
  		get 'comunidades'
  	end
  end

  resources :communities

  resources :site_categories

  devise_for :users

  get 'home/index'  
  
  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
