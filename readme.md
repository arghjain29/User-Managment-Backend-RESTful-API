# User Management Backend

This project provides a backend service for managing users. It includes APIs for user registration, authentication, profile management, and user deactivation, using Node.js, Express.js, MongoDB, and JWT for secure user authentication.

## Features

**User Registration**: Allows users to create an account by providing their name, email, password, and phone number.
- **User Authentication**: Allows users to log in using email and password. Authenticated users receive a JWT token for secure access to other endpoints.
- **Profile Management**: Allows users to view and update their profile, including name, email, and phone number.
- **Account Deactivation**: Users can deactivate their accounts, which sets the account status to inactive and prevents login.
- **Admin Access**: Admin users can view details of all registered users.
- **JWT Authentication**: Secure login and access to private routes using JSON Web Tokens (JWT).
- **Password Validation**: Ensures that the password is at least 8 characters long and follows a valid format.
- **Email Validation**: Ensures that the email format is correct and prevents duplicate email registrations.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web framework for Node.js to handle HTTP requests.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/user-management-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd user-management-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```
2. The server will be running at `http://localhost:5000`.

## API Endpoints

### User Registration and Authentication

- `POST /api/register`: Register a new user. (Requires `name`, `email`, `password`, `phone`)
- `POST /api/login`: Log in a user. (Requires `email`, `password`)

### User Profile

- `GET /api/profile`: Get the user's profile. (Requires authentication with JWT token)
- `PUT /api/profile`: Update the user's profile (name, email, phone). (Requires authentication with JWT token)

### Account Management

- `POST /api/password-reset`: Reset the user's password. (Requires email)
- `POST /api/deactivate`: Deactivate the user's account. (Requires authentication with JWT token)

### Admin

- `GET /api/users`: Get a list of all registered users. (Requires admin authentication)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.