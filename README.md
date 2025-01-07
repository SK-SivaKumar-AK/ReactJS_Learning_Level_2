# ReactJS_Learning_Level_2
This is reactjs learning level 2.



#Chapters

Chapter-1 Introduction

#1 What is React?
    - Reactjs.org for reference
#2 Using React in HTML
    - React cdn links (https://legacy.reactjs.org/docs/cdn-links.html)
    - Copy  react.development.js for react code 
    - Copy react-dom.development.js for react connect to html code.
    - Babel cdn links (https://babeljs.io/docs/babel-standalone)
    - babel.min.js for browser support
    - Remaining refer the html file code.




Chapter-2 Getting Started with React

#1 Create React App Tool
    - Download Nodejs
    - node -v
    - Go to the project create folder
    - npx create-react-app react-advance
    - Press Enter
#2 Running Project
    - cd react-advance
    - npm start   
    - npm i < <!-- package name --> >  (If any error throw)
    - Ctrl + C
    - Y and press Enter
#3 Understanding React Project
    - Dependencies - for install packages
    - Script - for npm run command
    - Index.html (Display page)
    - Index.js (Render to the index.html file)
    - Index.css (Render style to the index.html file)
    - App.js - For starting the react code rendering 
    - Webpack is for compaile all file to single file




Chapter-3 React Basics

#I JSX
    - App.js file function return (JSX code means JS XML code)
    - Developer tool -> Sources -> static-js-bundle.js (For render all file for working all browser)
#II Components
    - Each function is each component in same file (Example commented in index.js file)
    - Each component have one parent element.
    - Seperate the component in seperate file.
    - Export car file and import in garage file and export the garage file and import in index.js file
#1 Class Component
    - Create one class file and exort and import same as function coponent.

#2 Props in Func Component
#3 Props in Class Component

#4 React Developer Tool
    - React developer tool extension
    - Developer tool -> Components structure like html.
    - Inside components show the props

#5 Conditional Rendering

#6 List
#7 List Keys

#8 Inline CSS
#9 CSS sheet

#10 State in Function Components
#11 State in Class Components

#12 Multiple State in Hooks
#13 State with object

#14 Set Func state with object
#15 SetClass state with object

#16 Update Array in Func state

#17 useEffect
#18 useEffect in different way

#19 Create Forms
#20 Getting Input value to State
#21 Submit form
#22 Multiple value submit
#23 Simplyfying multiply submit
#24 Setting initial value 



Chapter-4 Code challenge Project



Chapter-5 React Router

#1 Router Into
#2 Router Setup
    - npm i react-router-dom
#3 Router links
#4 Router Parameter
#5 Nested Routes
#6 Navigation Router



Chapter-6 Request and response in reactjs

#1 Project setup
    - JSON placeholder (https://jsonplaceholder.typicode.com/)
    - https://jsonplaceholder.typicode.com/users



Chapter-7 Testing basic
    - Create component
    - Create test suit file for component
    - npm install --save-dev @testing-library/react (import { render, screen } from '@testing-library/react';)
    - npm install --save-dev @testing-library/jest-dom (import '@testing-library/jest-dom';)



Chapter-8 E-commerce Project
    - Backend setup 
        - npm init
        - create app.js
        - npm i nodemon 
        - nodemon app.js in package.json
        - npm i express
    - Config the varibale
        - Create .env file
        - npm i dotenv
        - process.env.<!-- Variable -->
    - Creating Routes & Controllers
        - Install extension : Thunder client
    - Connecting database
        - npm i mongoose
    - Creating model file

Chapter-9 E-commerce project
    - Front end setup
    - npm i cors in backend folder
    - Frontend Project Setup
    - Creating HomePage
    - Creating Header & Footer Components
    - Breaking Page to Components
    - Integrating Get Products API
    - Fixing CORS Error
    - Showing Product Card Details
    - Implementing Product Search
    - Creating Product Detail Page
    - npm i react-toastify