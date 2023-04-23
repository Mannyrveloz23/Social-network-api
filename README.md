# Social Network API

This is a backend application for a social network built with JavaScript, Node.js, and MongoDB. The application uses the `date` native module for handling dates, as well as the `express.js` and `mongoose` npm packages for creating the API endpoints and interacting with the MongoDB database.

## Installation

To use this application, you must have MongoDB installed on your machine. Once you have MongoDB installed, you can follow these steps to get started:

1. Clone the repository: `git clone https://github.com/mannyrveloz23/social-network-api.git`
2. Navigate to the project directory: `cd social-network-api`
3. Install the dependencies: `npm install`

## Usage

To start the application, run `npm run dev` in your terminal. The application will run on `http://localhost:3001` by default.

You can use a tool like [insomnia](https://insomnia.rest/download) to interact with the API endpoints.

## API Endpoints

The following endpoints are available in the application:

### `GET /api/users`

Get a list of all users.

### `GET /api/users/:id`

Get a specific user by their ID.

### `POST /api/users`

Create a new user.

### `PUT /api/users/:id`

Update a user by their ID.

### `DELETE /api/users/:id`

Delete a user by their ID.

### `GET /api/thoughts`

Get a list of all thoughts.

### `GET /api/thoughts/:id`

Get a specific thought by its ID.

### `POST /api/thoughts`

Create a new thought.

### `PUT /api/thoughts/:id`

Update a thought by its ID.

### `DELETE /api/thoughts/:id`

Delete a thought by its ID.

### `POST /api/thoughts/:id/reactions`

Add a reaction to a thought.

### `DELETE /api/thoughts/:id/reactions/:reactionId`

Remove a reaction from a thought.

## Contributing

Contributions to this project are welcome! If you find a bug or have a feature request, please [open an issue](https://github.com/mannyrveloz23/social-network-api/issues/new) to get started.

## License

This project doesn't have any license.