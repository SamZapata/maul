module SitesHelper

	# Funcion cortar string url map
	  def url_map(site)
	    @site = params[:mapgoogle]
	    @site = Site.mapgoogle.gsub(/<iframe src="|" width="400" height="300" frameborder="0" 
	    	style="border:0" allowfullscreen><|iframe>/,"")
	  end
end
