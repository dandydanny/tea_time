post'/signup' do
  @user = User.new(params[:user])
  @user.password = params[:password]
  @user.name = params[:name]
  @user.email = params[:email]
  @user.save!
  session[:user_id] = @user.id
  redirect('/user/' + @user.id.to_s)
end

post '/' do
  @email = params[:email]
  @password = params[:password]
  @user = User.authenticate(@email,@password)
  # @user = User.find_by_email(params[:email])
  if @user
    session[:user_id] = @user.id
    redirect('/dashboard')
  else
    @error = "Unable to login. Please check your username / password."
    erb :index
  end
end

get '/logout' do
  session.clear
  redirect('/')
end

get '/dashboard' do
  if current_user
    @teas = Tea.all
    erb :dashboard
  else
    @error = "Please login first."
    erb :index
  end
end

get '/user/:user_id' do
  @user = User.find(params[:user_id])
  p @user
  erb :user
end
