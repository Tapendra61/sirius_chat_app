# Chatty
	Chatty is a Real Time chat application made using React.js as it's frontend and Express.js as the backend.

1. ## Screenshots

	### Login
	![login](assets/login.png)

	### Chat
	![chat](assets/chat.png)

2. ## Tools Used
	a. Node.js (npm)<br>
	b. Mongodb Atlas (db)<br>
	c. Cloudinary (image storage)<br>
	d. Vite (build tool)<br>

3. ## Build Steps
	a. Clone the project into your computer system.<br>
	b. Make sure <a href="https://nodejs.org/en/download">Node.js</a> is installed into your system.<br>
	c. Go to <a href="https://account.mongodb.com/account/login">Mongodb Atlas</a> website and make a database for the the application. Also do the same with <a href="https://cloudinary.com/users/login">Cloudinary</a>.<br>
	d. The root project folder provides .env.sample file for the necessary variables. Change it's name to .env and place it inside the backend folder.<br>
	e. Fill in all the necessary variables in the .env file using api keys and passwords you got from Mongodb Atlas and Cloudinary.<br>
	f. In terminal create two tabs. In one tab, cd into backend folder and in another tab, cd into frontend folder.
	g. Run command: "npm install" in both the terminal processes to install all the required dependencies.
	h. Finally, run command: "npm run dev" in both the terminal processes to start backend and frontend services.
	i. The terminal specifies the port number where the frontend app was started. Open your browser and go to localhost:port_number to open the application.