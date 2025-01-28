# eCommerce-follow-along
### Project Overview: E-Commerce Application (MERN Stack)

This project will guide you through building a full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will learn how to implement key functionalities such as user authentication, **product management, and **order handling while gaining hands-on experience with REST APIs, database schema design, and frontend development with React.

---

### Key Features:
- User Authentication: Secure login and registration with JWT.
- Product Management: CRUD operations for products, with features like filtering and sorting.
- Order Handling: Users can place and view orders.
- REST API: Build scalable API endpoints for managing users, products, and orders.
- Frontend: Responsive UI built with React for a smooth user experience.

---

### Core Concepts:
- MERN Stack: Using MongoDB, Express.js, React.js, and Node.js for full-stack development.
- REST APIs: Design and develop API endpoints for user and product management.
- Authentication: Implement secure login and session management.
- Database Schema: Design MongoDB schemas for users, products, and orders.

---

### Next Steps:
1. Set up the development environment and install dependencies.
2. Implement a basic server using Node.js and Express.
3. Start building the React frontend and connect it to the backend.
4. Design MongoDB schemas for structured data storage.

This project will help you master the full-stack development process, from database to frontend, with a focus on scalability and user interaction.



### Milestone 2 : Project Setup and Login Page
Created a structured folder hierarchy for the project.
Set up a React app for the frontend.
Set up a Node.js server for the backend.
Configured Tailwind CSS for streamlined styling.
Added optional extensions for improving development efficiency.
Built a functional and styled Login Page for the frontend.

### *Milestone 3 :

Set up dedicated folders for organizing backend code effectively.
Initialized and configured a Node.js server to handle API requests.
Connected the application to MongoDB to store and manage data.
Implemented basic error handling to ensure smooth server operation.\


## MILESTONE4 :-
1. Create a User Model
Designed and implemented a User Model that serves as a blueprint for how user data is structured and stored in the database. This model defines the user schema and the fields that are needed for user-related data.
2. Create a User Controller
Developed a User Controller that handles the logic related to user data. It manages tasks such as adding a new user, retrieving user information, and other user-related operations.
3. Enable and Configure Multer for File Uploads
Configured Multer to handle file uploads in the application. This allows users to upload files (like images) which will be stored appropriately in the system. Multer is set up to handle storage configurations and file validation.


---
## MILESTONE5 :-
1. Created a Sign-Up Page in React.
2. Implemented form validation for:
      Name (required)
      Email (valid format required)
      Password (minimum 2 characters)
      Password Confirmation (must match password)

4. Used React Router for navigation.

## MILESTONE 6;
New Feature Added:

--> Login Page:
A user-friendly login page has been added, featuring:

Email and password validation.

A "Show/Hide Password" toggle for enhanced user experience.

Error handling for invalid email format and password length.

Loading state to indicate the process of authentication.

Navigation to a signup page for new users.

--> Signup Functionality:

Passwords are securely hashed using bcrypt during signup to enhance security.

The hashed password is stored in the database instead of plain text.

Complete user data, including name, email, and other necessary information, is securely stored in the database.

--> File Upload Functionality:

Users can upload files securely via the application.

Uploaded files are validated for type and size restrictions to ensure security and compliance.

Files are stored in the server’s designated directory or cloud storage service.

Proper error handling ensures seamless user experience during upload failures.

Technologies Used:

React (Frontend)

Tailwind CSS (Styling)

React Router (Routing)

Express.js (Backend)

Stripe/PayPal (Payment Gateway)

bcrypt (Password Hashing)

Installation & Setup:

Clone the repository.

Run npm install to install dependencies.

Start the development server with npm start.

Ensure you have the necessary backend setup for user authentication, file upload handling, and database integration to manage hashed passwords, user data, and uploaded files securely.


## Milestone 7: Create Login Endpoint
Task Completed ✅
Implemented a login API endpoint.
Accepted user credentials (email/username and password).
Retrieved the corresponding user from the database.
Validated the password using bcrypt.
Compared the entered password with the stored hashed password for authentication.
Generated a JWT token upon successful login for authentication.
Implemented error handling for invalid credentials and server errors.