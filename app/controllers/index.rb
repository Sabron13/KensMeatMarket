require 'pony'

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

get '/contact' do
  erb :contact
end

post '/contact' do
  Pony.mail({from:'website',
            to:'newhavensmeatingplace@gmail.com',
            subject:'A message from ' + params[:name] + ' :' + params[:email],
            body:params[:comment]
            })
  redirect '/success'
end

get '/success' do
  erb :success
end