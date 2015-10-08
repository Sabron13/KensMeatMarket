get '/products/index' do
  @products = Product.find_by_sql("SELECT * FROM products ORDER BY products.name")
  if request.xhr?
    erb :'/products/index', layout: false 
  else
    erb :'products/index'
  end
end

get '/products/category' do
  @products = Product.find_by_sql("SELECT * FROM products ORDER BY products.category")
  erb :'/products/index', layout: false if request.xhr?
end

get '/products/description' do
  @products = Product.find_by_sql("SELECT * FROM products ORDER BY products.description")
  erb :'/products/index', layout: false if request.xhr?
end
