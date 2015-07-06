get '/products/index' do
  @products = Product.find_by_sql("SELECT * FROM products ORDER BY products.name")
  erb :'/products/index'
end