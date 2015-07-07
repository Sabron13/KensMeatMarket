get '/products/index' do
  @products = Product.find_by_sql("SELECT * FROM products ORDER BY products.name")
  if request.xhr?
    erb :'/products/index', layout: false
  else
    erb :'/products/index'
  end
end

get '/products/category' do
  if request.xhr?
    @products = Product.find_by_sql("SELECT * FROM products ORDER BY products.category")
    erb :'/products/index', layout: false
  else
    p "expect the unexpected"
  end
end

get '/products/description' do
  if request.xhr?
    @products = Product.find_by_sql("SELECT * FROM products ORDER BY products.description")
    erb :'/products/index', layout: false
  else
    p "expect the unexpected"
  end
end
