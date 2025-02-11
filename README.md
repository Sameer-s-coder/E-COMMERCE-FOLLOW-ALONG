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

### Milestone 8: Product Card Component 🌟

In Milestone 8, we created a reusable *product card component* to display product details like name, price, and image on the homepage. The card component is dynamic, accepting product information as props. We used *array mapping* to render a card for each product, ensuring the homepage remains clean and organized with a grid or flexbox layout.

### What’s Completed:
- Designed a reusable *card component*.
- Created a responsive *homepage layout* to display multiple cards.
- Passed dynamic product data into the card using props and array mapping.

### Next Steps 🚀
In the next milestone, we’ll add features like filtering and sorting. 

### Submission 📥
- Push code to GitHub (public repo).
- Update README and share the repo link.### Milestone 8: Product Card Component 🌟

In Milestone 8, we created a reusable *product card component* to display product details like name, price, and image on the homepage. The card component is dynamic, accepting product information as props. We used *array mapping* to render a card for each product, ensuring the homepage remains clean and organized with a grid or flexbox layout.

### What’s Completed:
- Designed a reusable *card component*.
- Created a responsive *homepage layout* to display multiple cards.
- Passed dynamic product data into the card using props and array mapping.

### Next Steps 🚀
In the next milestone, we’ll add features like filtering and sorting. 

### Submission 📥
- Push code to GitHub (public repo).
- Update README and share the repo link.

## Milestone : 9

Today, we will create a frontend form for taking products input. Let’s dive in and understand what this all means!

Learning Goals 🎯
By the end of this milestone, you will:

Learn how to create a form that will take all the details of product
Learn how to take multiple images as input.
Why Create Product form?
Here we will create an form to input all the details of product.
This details will be eventually saved in database and will be displayed on products home page we created in previous milestone.
Steps for Milestone 9📝
Create the form for products

This form will take multiple product images images as input

Note:- This lesson will help you in understanding the basic creating of products please feel free to experiment on adding more features like creating an admin access and allow only admin to upload products or create and shop profile and a user with only shop profile can upload.

---

## Milestone 10:

**Creating the Product Schema and API Endpoint**
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.
1. Product Schema Definition:
- Defined a structured product schema using Mongoose to store product data in MongoDB.
- Ensured each field has proper validation to maintain data integrity:
- Name: Required, string**
- Description: Required, string
- Price: Required, number, with validation for non-negative values
- Image URL(s): Required, array of strings for multiple image storage
- Category: Required, string
- CreatedAt: Automatically generated timestamp

2. Endpoint Creation:
- Developed a POST endpoint (/api/products) to accept product details from the frontend.
- Implemented validation to ensure only correctly formatted data is stored in the database.
- Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
- Enforced strict validation to prevent invalid or incomplete product entries.
- Returned appropriate error messages for missing or incorrect data inputs.
4. Future Enhancements & Experimentation:
- Considered adding role-based access control:
- Admin Access: Only admin users can create new products.
- Shop Profiles: Restrict product uploads to users with a registered shop profile.
- Image Upload Handling: Implement a cloud-based solution (e.g., Cloudinary, AWS S3) for better image management. make this short.

## Milestone 11 - Dynamic Home Page with Product Data

### Overview
#### In this milestone, we will make the home page dynamic by fetching and displaying all products stored in MongoDB.

- We will write a backend API endpoint to retrieve product data.
- The frontend will call this API and display the products dynamically using the ProductCard component.
#### Learning Goals 🎯
By completing this milestone, you will learn:
- ✅ How to write an API endpoint to fetch data from MongoDB.
- ✅ How to receive and handle data on the frontend.
- ✅ How to display data dynamically using components.

### Steps to Complete Milestone 11 📝

1. Backend: Create an API Endpoint
- Create an API route in Express.js to fetch all products from MongoDB.
- Use Mongoose to retrieve the data.
- This API fetches all products and sends them in JSON format.
- The frontend will call this API to get the list of products.


2. Frontend: Fetch Product Data
- Create a function to fetch product data from the backend using fetch() or Axios.
- Store the data in a state variable.
- useEffect calls the API when the page loads.
- setProducts stores the fetched data.
- map() loops through the products and passes each to ProductCard.


3. Display Products Dynamically
- The ProductCard component will receive product data as a prop and display it.
- Displays product image, name, and price dynamically.

#### Final Outcome 🎉
- ✅ The backend API sends all product data.
- ✅ The frontend fetches this data.
- ✅ Products are dynamically displayed using the ProductCard component.

# Milestone 12: My Products Page

## Overview
In this milestone, we will create a "My Products" page that displays all products added by a user based on their email. We will accomplish this by writing a backend endpoint to fetch products from MongoDB filtered by the user's email and dynamically displaying them on the frontend using the previously created product card component.

## Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write an endpoint to filter and send data from MongoDB based on a user's email.
- Understand how to fetch and receive data on the frontend.
- Display data dynamically using a product card component.

## Steps to Complete Milestone 12 📝

### Backend:
1. **Create an endpoint** in your backend application that retrieves all products associated with a user's email from MongoDB.
2. **Filter products** based on the email provided in the request.
3. **Send the filtered data** as a response to the frontend.

### Frontend:
1. **Write a function** to fetch the filtered product data from the backend.
2. **Process the received data** and pass it to the product card component.
3. **Dynamically display** the products on the "My Products" page.

## Notes
- This lesson will help in understanding how to filter data based on specific constraints and send it to the client efficiently.
- Ensure proper error handling for scenarios where no products are found for a given email.

## Next Steps
- Enhance the UI with better styling and user experience.
- Implement pagination if needed for better performance.
- Add authentication checks to ensure only the logged-in user's products are displayed.

# Milestone 13 - Edit and Update Products in MongoDB

## 🌟 Overview
In this milestone, we have implemented the functionality to **edit** the uploaded products. Users can now modify existing product details and save the updates in the MongoDB database.

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** that updates existing data in MongoDB.
- How to **auto-fill a form** with previous data and allow users to edit it.
- How to handle update operations effectively in a **full-stack** application.

---