source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.2'
# Use sqlite3 as the database for Active Record
#gem 'sqlite3'
#Database postgres
#gem 'pg', '~> 0.21.0'
gem 'pg'
#Database MYSQL
#gem 'mysql2', '>= 0.3.18', '< 0.5' 
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Registro y autenticación de usuarios
gem "devise"
#Access authorization for users
gem 'cancancan', '~> 2.0'

gem 'omniauth'

#Bootstrap
gem 'bootstrap', '~>4.0.0.alpha6'
#gem 'bootstrap-sass', '~> 3.3.6'
#gem "bootstrap-sass-rails"
gem 'rails_bootstrap_navbar'

#Angular
gem 'angularjs-rails'

#Para procesar imagenes, archivos adjuntos
gem "paperclip", "~> 5.2.0"
#
gem 'carrierwave'
#gema que permite hostear archivos adjuntos con paperclip
gem 'paperclip-cloudinary'


gem 'autoprefixer-rails'
gem 'simple_navigation'

#Esta gema permite hacer responsive el sitio, layouts, menus y más
gem 'zurb-foundation', '~> 4.3', '>= 4.3.2'

#Gema para iconos font-awesome
gem 'font-awesome-rails'

#Gema para habilitar caracteristicas del login y asset
gem 'rails_12factor', group: :production

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  #gem 'spring-watcher-listen'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.3.3'
end

group :assets do
  gem 'bootstrap-sass-rails'
end