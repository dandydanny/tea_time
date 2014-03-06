get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/about' do
  erb :about
end

post '/add' do
 tea = Tea.create(name: params[:tea_name])
 p = Preference.create(user_id: current_user.id, tea_id: tea.id, opinion: params[:opinion])

end

post '/associate' do
  tea = Tea.find_by(name: params[:tea_name])
  p = Preference.create(user_id: current_user.id, tea_id: tea.id, opinion: params[:opinion])

  # Return JSON back to JS
  # e.g. {"tea_id":7,"tea_name":"Rooibos Tea","opinion":"What is this?"}
  { :pref_id => p.id, :tea_id => tea.id, :tea_name => tea.name, :opinion => params[:opinion] }.to_json
end

post '/dissociate' do
  current_user.preferences.find(params[:pref_id]).destroy
end

get '/tea/:tea_id' do
  @tea = Tea.find(params[:tea_id])
  erb :tea
end
