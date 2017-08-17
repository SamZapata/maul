json.extract! event, :id, :name, :about, :fecha, :hora, :sitio, :estado, :created_at, :updated_at
json.url event_url(event, format: :json)
