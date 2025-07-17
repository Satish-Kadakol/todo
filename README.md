# Todo App - Node.js Backend

This is a simple backend project for a Todo application built using Node.js, Express.js, and MongoDB. It includes user authentication using JWT and follows best practices such as modular folder structure and usage of environment variables.

## Features

- User registration and login
- Authentication using JSON Web Tokens (JWT)
- Create, read, update, and delete todos
- Secure routes that require authentication
- Uses environment variables for sensitive configurations
- Modular project structure
- Tested using Postman

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs (for password hashing)
- dotenv (for environment variables)
- nodemon (for development with auto-reloading)


## Testing

All routes have been tested using Postman.  
Use the token received from login API and include it in the Authorization header to test protected routes.

