require 'test_helper'

class ProjectControllerTest < ActionDispatch::IntegrationTest
  test "should get about" do
    get project_about_url
    assert_response :success
  end

end
