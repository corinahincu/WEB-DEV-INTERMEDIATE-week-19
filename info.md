# WHAT IS REACT ?

  - JAVASCRIPT library used to create website

  - Allows us to easily create SINGLE PAGE APPS (SPA's for short), 
  it means that the server needs to send only a single HTML page (index.html) to the browser for the website to run fully and then react takes over and manages the whole website in the browser , including any king of website data or user interactivity such as click events and even routing from page to page.

! if you want to use emmets using react, then u need to add in settings 2 things. So go in settings, write emmet, then find emmet: include languages, and to item add javascript and to value add javascriptreact

code . -> to open from terminal your project
⌘⇧P -> to open command palette for macos

## REACT -  STRICT MODE 
  we have additional checks during development, and gives us warnings down in a console 

### NODE MODULES
  all our projet dependencies live inside our node modules. So in case we delete this folder/module, in the console will have an error when we'll try to access npm run start.
  But when we add the projects in github, we don't add node modules folder, because its huge. It's a problem , when we download the code for a project, so in that case how we'll get this folder ? in that case we need in pur directory, to write npm install, in that case it will look in our package.json that has all our dependencies,and  it will install automatically node modules folder. This is also why package.json is so important, because it lists all dependencies that need to be installed

  #### WHAT IS A TYPICAL WEB PAGE BUILD WITH REACT?
  a typical web page build with react might be made up of several different components where each componen is normally a self-contained section of content for ex. a navbar in a website might be a component , an article and a sidebar might be a component etc . The job of a react developer, is to create this components which are then rendered to the dom and shown in the web page by react. Which of these components will contain all their : 
         - template
         - logic 

##### jsx syntax !!!
looks like html, has similar syntax , allows us to easily create these html style templates and components and in the background a transpiler called babel that converts all of this jsx template into html when we save the file, and renders that html to the dom.
One big difference between jsx and html, is the way we add classes to elements, in jsx we use className, not class like in html, because we are in js file, and class is already reserved.


###### ROOT COMPONENT 
  like a tree
