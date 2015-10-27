get '/' do
  erb :splash, layout: false
end

get '/map' do
  erb :map
end

get '/specials' do
  erb :specials
end

get '/index' do
  erb :index
end