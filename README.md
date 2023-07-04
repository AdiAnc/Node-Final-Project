# Node-Final-Project
Web application for Movies &amp; User management


1. Login page :
When login in > req data sends from the route to login function > findOne Schema function check if the user name and password are valid:
![image](https://github.com/AdiAnc/Node-Final-Project/assets/107412958/d4a1db61-dbcd-4946-8872-5f27e1748069)
After success logging the dataLogin saves in the session and will be called in the other routes

2. Create an Account Page:
   A ejs view opened > when the user submits data, it saves as req body in login routes > Create account function check that the userName is uniq > Create a doc and save it in the MongoDB:
![image](https://github.com/AdiAnc/Node-Final-Project/assets/107412958/c936429b-96c9-49e6-9b1a-8dac3b0ee764)

3. All movies Page :
   When clicking on the movies page > the application checks if the "moviesUpdated" is true ot false > if false:
    -> the app retrive all the movies data from the the WS (https://api.tvmaze.com/shows) ->  store the record in the DB > change the flag to false.
 If true > Get all the records from the DB.
![image](https://github.com/AdiAnc/Node-Final-Project/assets/107412958/228db443-a130-4bde-a894-e3da703871a7)

5. Edit Movie Page :
 ![image](https://github.com/AdiAnc/Node-Final-Project/assets/107412958/dec82caf-dd3a-457f-bc77-a2f0dead63bc)
  
6. Add movie Page :
   Create a movie record
![image](https://github.com/AdiAnc/Node-Final-Project/assets/107412958/14f53461-b71f-4897-bd72-ebc917401fdd)

7. User Management > retrieve all the users from users' Mongo collection 

![image](https://github.com/AdiAnc/Node-Final-Project/assets/107412958/2f7e2ae4-1e86-4147-9c9a-0e13687fad07)

6. Edit user :
![image](https://github.com/AdiAnc/Node-Final-Project/assets/107412958/882d27f9-bcd9-4286-9d36-97b0c2496f41)

