class SiteCategoriesController < ApplicationController
	before_action :set_site, only: [:show, :edit, :update, :destroy]

	def index
    	@site_categories = Site_category.all
  	end

  	 def create
    	@site_categories = Site_category.find(params[:site_category_id])    	
  	end

end
