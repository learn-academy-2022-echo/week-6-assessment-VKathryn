# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags
# Looking for answers based on the line directly below the number!

# FILE: app/controller/blog_posts_controller.rb

# ---1) This is class inheritance, BlogPostsController is inheriting from the ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) This is assigning an active record query that shows all the blogposts that exist.
    @posts = BlogPost.all
  end

  # ---3) The show method, stores the active query to show a blogpost as identified by a specific id (autopopulated by app). 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This displays an html form to allow a user to create a new blogpost. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This creates a new blogpost in the data table using the blog_post_params.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This is an instance variable that will return the id being called in the params. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This updates the blogpost at the id using the params, by sending a patch request. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This removes the blog post from the database and redirects user to the post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private declares that all material after it is hidden from the user. This method is only accessed within the class.
  private
  def blog_post_params
    # ---10) These are strong parameters! They are in charge of what can and cannot go into the database. Strong params can be require or permit, required params are necessary, and permitted params are allowed, but not required. This is a safety measure against hackers and also 
    params.require(:blog_post).permit(:title, :content)
  end
end
