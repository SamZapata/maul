# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180604033933) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.text     "about"
    t.integer  "subcategory_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "communities", force: :cascade do |t|
    t.string   "name",                default: "", null: false
    t.text     "about",                            null: false
    t.text     "contacto"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "email"
    t.string   "facebook"
    t.string   "twitter"
    t.integer  "site_id"
    t.integer  "comuna_id"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.integer  "topic_id"
  end

  create_table "comunas", force: :cascade do |t|
    t.string   "name"
    t.text     "about"
    t.string   "enlace"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.text     "about"
    t.date     "fecha"
    t.time     "hora"
    t.string   "sitio"
    t.string   "estado"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "site_id"
    t.integer  "topic_id"
  end

  create_table "feedbacks", force: :cascade do |t|
    t.text     "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "means", force: :cascade do |t|
    t.string   "nombreRecurso"
    t.string   "tipo"
    t.integer  "Cantidad"
    t.integer  "disponibilidad"
    t.string   "observacion"
    t.integer  "aportado"
    t.integer  "pendiente"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "site_categories", force: :cascade do |t|
    t.string   "name"
    t.text     "about"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sites", force: :cascade do |t|
    t.string   "name"
    t.text     "about"
    t.string   "adress"
    t.string   "phone"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "mapgoogle"
    t.integer  "comuna_id"
    t.integer  "category_id"
  end

  create_table "topics", force: :cascade do |t|
    t.string   "name"
    t.text     "about"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "topicsevents", force: :cascade do |t|
    t.integer  "event_id"
    t.integer  "topic_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "provider"
    t.string   "uid"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "username"
    t.string   "facebook"
    t.string   "twitter"
    t.string   "linkedin"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
