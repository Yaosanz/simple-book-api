### Simple Book API using Node.js and Express

**Table of Contents**
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Sample Requests](#sample-requests)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Welcome to the Simple Book API, a minimalistic Node.js application built with the Express framework. This API serves as a basic foundation for managing a collection of books, providing simple CRUD (Create, Read, Update, Delete) operations.

## Features

- **Create:** Add new books to the collection.
- **Read:** Retrieve information about existing books.
- **Update:** Modify details of a specific book.
- **Delete:** Remove a book from the collection.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/syanzzz/simple-book-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-book-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The API will be accessible at `http://localhost:3000`. You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API.

## Endpoints

- **GET /books:** Retrieve all books.
- **GET /books/:id:** Retrieve a specific book by ID.
- **POST /books:** Add a new book.
- **PUT /books/:id:** Update details of a specific book.
- **DELETE /books/:id:** Remove a book from the collection.

## Sample Requests

### Get All Books

```bash
curl http://localhost:3000/books
```

### Get a Specific Book

```bash
curl http://localhost:3000/books/1
```

### Add a New Book

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}' http://localhost:3000/books
```

### Update a Book

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Title"}' http://localhost:3000/books/1
```

### Delete a Book

```bash
curl -X DELETE http://localhost:3000/books/1
```

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore, modify, and use this Simple Book API as a starting point for your Node.js and Express projects! If you have any questions or suggestions, please don't hesitate to reach out. Happy coding! 🚀
