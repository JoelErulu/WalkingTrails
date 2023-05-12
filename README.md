# WalkingTrailApp

[Repo URL](https://github.com/GGC-SD/WalkingTrailApp.git)

### Description

A fitness app which allows users to experience trails through a digital experience. Users in the future will be able to scan QR codes to learn about trails they are exploring, create blog posts, and begin personalized workouts

### Technologies

This project uses the MERN Stack

- MongoDB
  https://www.mongodb.com/
- Express
  https://expressjs.com/
- Node
  https://nodejs.org/en/
- React
  https://reactjs.org/

- Google Map Api
- https://developers.google.com/maps
- (IMPORTANT)
- The google map api needs key access from goolge through paid access.
  Either a renewal of a access is needed or use a new google account to obtain another key for a new free trial for the map to work.

### Installation Steps

\*\*\* Add --force at the end of the npm command when encountered with errors

1. Open the terminal
2. Move to the "client" directory (cd C:/../WalkingTrailApp/TrailApp/client)
3. Enter the following commands:  
   npm i @material-ui/core  
   npm i @material-ui/icons  
   npm i @material-ui/lab  
   npm i @react-oauth/google  
   npm i axios  
   npm i jwt-decode  
   npm i material-ui-chip-input  
   npm i moment  
   npm i react  
   npm i react-dom  
   npm i react-file-base64  
   npm i react-redux  
   npm i react-router-dom  
   npm i react-scripts  
   npm i redux  
   npm i redux-thunk  
   npm i --legacy-peer-deps  
   npm i -S @react-google-maps/api
4. Move to the "server" directory (cd C:/../WalkingTrailApp/TrailApp/server)
5. Enter the following commands:  
   npm i bcryptjs  
   npm i body-parser  
   npm i cors  
   npm i express  
   npm i jsonwebtoken  
   npm i mongoose  
   npm i nodemon
   npm i google-auth-library

### How to Run

1. Move to the "client" directory inside of the TrailApp foler
2. Enter "npm start" in the terminal
3. Move to the "server" directory inside of the TrailApp foler
4. Enter "npm start" in the terminal

### List of working features

1. Authentication - Create an account, store credentials in Mongoose, and access user-specific data. Log in to existsing accounts.
2. Interactive Map - Admin can create markers that contain content (Excercises, nutrition information, )
3. Admin view - Admin can assign privleges, create content, update content, delete content.

### Features for the future

1. Have comments and reviews of trails posted on the blog
2. Offline/True GPS tracking (High difficulty, if you want to do this then start immediately or you won't have enough time to complete)

### link to the demo of the app running

https://youtu.be/kh5tvO762no
