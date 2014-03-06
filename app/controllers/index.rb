get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/about' do
  erb :about
end

post '/dissociate' do
  current_user.preferences.find_by(tea_id: params[:tea_id]).destroy
end
