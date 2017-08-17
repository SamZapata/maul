json.extract! site, :id, :name, :about, :adress, :phone, :created_at, :updated_at
json.url site_url(site, format: :json)
