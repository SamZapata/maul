class SiteCategoriesController < ApplicationController
	before_action :set_site, only: [:show, :edit, :update, :destroy]

	def index
    	@site_categories = SiteCategory.all
  	end

  	 def create
    	@site_categories = SiteCategory.find(params[:id])
  	end

end
