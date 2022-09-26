# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This question is a mystery to me! I would absolutely refer to my research abilities if I was asked this question in an interview. My instinct is that the foreign key would be found on the Student model, but it could be that the foreign key is added to the Cohort model as a way to track that the data in the Student model belongs to the Cohort model.

Researched answer: The Cohort model has_many students, whose data lives in the Student, so you would want to add a foreign key to students. After checking the schema to ensure that you did forget this step, you would add the foreign key to the student model as a way to link it to the cohort. 


2. Which RESTful routes must always be passed params? Why?

Your answer: Create, Update and New require params because you are adding/changing data using these routes, and you need params to identify which element you are adding or changing. If you don't have the params, it simply wouldn't work!

Researched answer: Show, update, edit and destroy are the RESTful routes which require parameters. This is because if you are using show, you need to indicate what data you want it to show you. When using update, edit and destroy, you need to indicate which data on which you want to complete the action. You do this using the params to identify the information you want to access/change. For example, when using create, you are creating new data, so using params is a moot point, because you are creating the data. But when wanting to edit that data, you do need params so that the program understands which data to target.

3. Name three rails generator commands. What is created by each?

Your answer: The first that comes to mind is 'rails db:migrate', which migrates changes so that they are able to be visible in the application. An example of when you should do a migration command is if you have updated anything in the routes file, you would need to do a migration to see those changes reflected in the app. Rails generate model is the generate command to create a model. Following that will be the name you are giving the model. The next is rails db:create is the command to create a database. This is utilized at the beginning of the app making process with Rails. Below you can see my notes on creating a wildlife tracking app, these are the commands I used to get started, and you can find many rails generator commands.

$ rails new digital-scout-api -d postgresql -T
$ cd digital-scout-api
$ rails db:create
$ git remote add origin https://github.com/learn-academy-2022-echo/wildlife-tracker-VKathryn.git
$ code .
$ git status
$ git add .
$ git commit -m "initial commit"
$ git push origin main
$ bundle add rspec-rails
$ rails generate rspec:install
$ rails s
$ git checkout -b animal-crud-actions
$ rails generate resource Animal common_name:string scientific_binomial:string
$ rails routes -E     routes cheat sheet
$ rails db:migrate

Researched answer: Rails generator commands include controller, model and RSpec. This enables us to set up the folders and files needed so that we have the exact functionality we are looking for, but with elements like naming conventions set up appropriately. We can also create a model with columns & data types, a controller, RESTful routes and a view folder by using the generate resource command. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform? *Name and Purpose*

action: "GET" location: /students The HTTP verb GET used on the path /students would perform the action of showing the index of students, which displays a list of all of the data available in students.

action: "POST" location: /students The HTTP verb POST used on the path /students would perform the action of creating a new data set, so assuming that /students contains a list of names of students, it would create a new student name. 

action: "GET" location: /students/new The HTTP verb GET used on the path /students/new would return an HTML form for creating a new student name (again, assuming that /students contains a list of names of students)

action: "GET" location: /students/2 The HTTP verb GET used on the path /students/2 would be SHOW, which would allow you to see the student at the index of 2. 

action: "GET" location: /students/2/edit The HTTP verb GET is used on the path /students/2/edit would perform the action of allowing us to EDIT the information of the student at the index of 2.

action: "PATCH" location: /students/2 The HTTP verb PATCH is used on the path /students/2 to perform the action of updating or editing a piece of data pertaining to the student at the index of 2.

action: "DELETE" location: /students/2 The HTTP verb DELETE is used on the path /students/2 to perform the action of destroying the data found of the student at the index of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a new user, I need to create an account by filling in all of the required elements to register so that I can use the full functionality of the app, and save my data. Ensure that the user can enter their info on the registration form, click submit, receive an email notification of registration & access the log in form after registration is complete.
2. As a registered user, I want to sign in by entering my email address and password. 
Ensure that the user can enter their email and password and click submit. Also ensure there is an option to retrieve their password if they have forgotten it by clicking on 'Forgot Password'.
3. As a user, I want to see a main page after logging in, where all lists are labeled and accessible, so that I can see what I've created so far. 
4. As a user, I can access a brief, informative tutorial, so that I can understand how to use the app.
5. As a user, I can enter info to create a list, name it and add items to the list, so that I can organize my tasks.
6. As a user, I can elect to receive notifications from the app, so that I can be reminded of tasks.
7. As a user, I can add additional items to my list and it will populate an empty checkbox, so that I can keep my progress updated.
8. As a user, I can archive or delete a list when I have completed it, to keep my space organized.
9. As a user, I can click on a 'Get Help' button and be brought to a page with help options: 'Send an email', FAQ section, so that if I am stuck, I have options.
10. As a user, I can click on 'Delete my data' so that I can clear out the data stored in our database. 
