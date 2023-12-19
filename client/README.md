# ReactJS-Project


## Overview
Design and implement a web application (Single Page Application) using React.js.
### Topic: softAuto
Web application for car sales

## Public part (Accessible without authentication)
### This part of the application is designed for non-registered users. These users have access to the following:
* Home Page -> You can find basic information.
* Used cars -> Catalog which contains all cars for sale
* New cars -> A page offering brand new cars
* Car reviews -> A page for car reviews
* Sign in/Sign up Page -> This page appears when you click on Header's sign-in icon. If you don't have profile, you can switch to sign-up form..


## Private part (Available for Registered Users)
### Logged in users have access to the following:
* Sell your car -> You can fill  the form and list your car for sale
* Leave a Comment -> You can add a comment to any ad
### Logged in user (owner) have access to the following:
* Edit  -> You can change the information about the car  you created
* Delete  -> You can delete the car you added.

## Technical Details
### Client:
* If you want to run the project, you have package.json file in the main client folder.

#### npm install
#### npm run dev

### Server:
* The server used in the project is Softuni practice server (https://github.com/softuni-practice-server/softuni-practice-server).
This is a REST service, created for educational purposes. A compiled bundle should be available with every exercise's resources. To execute it, run the included start.bat file, or manually open a command prompt and run:

 #### node .\server.js  

* It was modified, so the initial users have admin role and the initial collecitons are changed.

* Authentication
The service is initialized with three users, which can be used for immediate testing:

#### peter@abv.bg : 123456
#### john@abv.bg : 123456

