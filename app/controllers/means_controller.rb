class MeansController < ApplicationController
  before_action :set_mean, only: [:show, :edit, :update, :destroy]

  # GET /means
  # GET /means.json
  def index
    @means = Mean.all
  end

  # GET /means/1
  # GET /means/1.json
  def show
  end

  # GET /means/new
  def new
    @mean = Mean.new
  end

  # GET /means/1/edit
  def edit
  end

  # POST /means
  # POST /means.json
  def create
    @mean = Mean.new(mean_params)

    respond_to do |format|
      if @mean.save
        format.html { redirect_to @mean, notice: 'Mean was successfully created.' }
        format.json { render :show, status: :created, location: @mean }
      else
        format.html { render :new }
        format.json { render json: @mean.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /means/1
  # PATCH/PUT /means/1.json
  def update
    respond_to do |format|
      if @mean.update(mean_params)
        format.html { redirect_to @mean, notice: 'Mean was successfully updated.' }
        format.json { render :show, status: :ok, location: @mean }
      else
        format.html { render :edit }
        format.json { render json: @mean.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /means/1
  # DELETE /means/1.json
  def destroy
    @mean.destroy
    respond_to do |format|
      format.html { redirect_to means_url, notice: 'Mean was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mean
      @mean = Mean.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mean_params
      params.require(:mean).permit(:nombreRecurso, :tipo, :Cantidad, :Disponibilidad, :observacion, :aportado, :pendiente)
    end
end
