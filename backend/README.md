### Simple ECommerce Application with MERN Stack - Backend

#### Description
This is a backend application built with Express.js and MongoDB, providing API endpoints for a simple ecommerce application.

### Instructions for Running the Application

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set any required environment variables in a `.env` file.
5. Start the server using `npm start`.

---

### Dependencies

#### `bcryptjs`
Library for hashing passwords in Node.js, enhancing security for user authentication.

#### `cors`
Middleware for Express.js to enable Cross-Origin Resource Sharing (CORS) for secure communication between different origins.

#### `dotenv`
Loads environment variables from a `.env` file.

#### `express`
Minimalist web framework for Node.js.

#### `mongoose`
Object Data Modeling library for MongoDB.

#### `nodemon`
Utility for automatic server restarts during development.

#### `socket.io`
Enables real-time bidirectional communication.

#### `stripe`
Library for integrating with the Stripe payment platform.

#### `validator`
Provides string validation and sanitation functions.

---

### Scripts

#### `start`
- Command: `nodemon --experimental-modules --es-module-specifier-resolution=node app.js`
- Description: Starts the server using Nodemon, allowing automatic restarts upon changes in the codebase.
- Flags:
  - `--experimental-modules`: Enables support for ECMAScript modules in Node.js.
  - `--es-module-specifier-resolution=node`: Specifies the module specifier resolution strategy to Node.js.

---