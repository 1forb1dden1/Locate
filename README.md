# Warning
THE IMAGES TAKING WHILE THIS APPLICATION IS RUNNING WILL BE STORED IN THE USER'S LOCAL DRIVE. THIS CAN POTENTIALLY FLOOD YOUR ENTIRE PHOTO GALLERY WITH THOUSANDS OF PICTURES IF THE APPLICATION IS RAN UNMODERATED. 

# How To Run
1. Download Expo go From the APP STORE
2. Clone this file into vs code.
3. type "expo install" in the terminal to install dependencies.
4. type "npm install" in the terminal to install dependencies.
5. type "expo start" to start the application (a window should pop up in your browser).
6. Scan the QR code to run the Application (if it does not run change the mode to tunnel mode).

# Current Functionalities
1. Text-To-Speech on changes inside the application.
2. Displays the users current Location on the Map
3. Continuously updates the detected user location.
4. Automatically queries for the users location and to take a picture simultaneously after a specified delay.
5. Prints information received from queries such as the Altitude, Latitude, Longitude, and image uri. 

# Main Screen 
<img src="https://user-images.githubusercontent.com/90816621/164991491-62f82794-0edd-4b5b-816d-4b241ac4c4b1.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="300" height="600" />

# Console

While the application is running, it will automatically query the system for information about the user's current coordinate, and to take a picture.
This data will then be printed out to the console. <br/> <br/>
<img src="https://user-images.githubusercontent.com/90816621/164991998-e9d3804e-7076-44f7-b09c-d2e86e40ed3e.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="600" height="700" />

# Usage 
Right now the application is not able to automatically render the data into an object. However, it is possible to manually render the image by copying and pasting 
the printed statements in the console to use in our code.
1. Run the Application and store the files locally or temporarily.
2. locate the console, then copy and paste the entire print statement.
3. locate the DataScreen in the Screens folder and open it.
4. Find the List Items and replace the objects inside with the print statement.
5. Refresh Expo Go and the Data should be displayed in the form of a scrollable list.
<img src="https://user-images.githubusercontent.com/90816621/164992279-b034c6b0-ed49-4ae9-a03f-d3277d2d57c4.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="300" height="600" />

# Future Features
1. Store your favorite location ( coordinate ) in the application.
2. Navigation feature to navigate to saved locations or any coordinate/store. 
3. Automatically decide when to stop querying for the user's location and take picture. 
4. Utilizes temporary pictures in the cache rather than save them into the user's phone.
 
