require 'test_helper'

class MeansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mean = means(:one)
  end

  test "should get index" do
    get means_url
    assert_response :success
  end

  test "should get new" do
    get new_mean_url
    assert_response :success
  end

  test "should create mean" do
    assert_difference('Mean.count') do
      post means_url, params: { mean: { Cantidad: @mean.Cantidad, Disponibilidad: @mean.Disponibilidad, aportado: @mean.aportado, nombreRecurso: @mean.nombreRecurso, observacion: @mean.observacion, pendiente: @mean.pendiente, tipo: @mean.tipo } }
    end

    assert_redirected_to mean_url(Mean.last)
  end

  test "should show mean" do
    get mean_url(@mean)
    assert_response :success
  end

  test "should get edit" do
    get edit_mean_url(@mean)
    assert_response :success
  end

  test "should update mean" do
    patch mean_url(@mean), params: { mean: { Cantidad: @mean.Cantidad, Disponibilidad: @mean.Disponibilidad, aportado: @mean.aportado, nombreRecurso: @mean.nombreRecurso, observacion: @mean.observacion, pendiente: @mean.pendiente, tipo: @mean.tipo } }
    assert_redirected_to mean_url(@mean)
  end

  test "should destroy mean" do
    assert_difference('Mean.count', -1) do
      delete mean_url(@mean)
    end

    assert_redirected_to means_url
  end
end
