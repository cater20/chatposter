class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/posts" do
    posts = Post.all.order(:title)
    posts.to_json
  end

get "/posts/:id" do
posts=Post.find(params[:id])
  posts.to_json
end

post "/posts" do
  posts=Post.create(
    author:params[:author],
    title : params[:title],
    body:params[:body]
  )
  posts.to_json
end

patch"/posts" do
  posts=Post.find(params[id])
  post.update(
    author:params[:author],
    title : params[:title],
    body:params[:body]
  )
  posts.to_json
end

delete "/posts/:id" do
  posts=Post.find(params[:id])
  posts.destroy
posts.to_json

end
