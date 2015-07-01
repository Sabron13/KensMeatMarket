get '/products/index' do
  @products = Product.all
  erb :'/products/index'
end