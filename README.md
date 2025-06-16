# ThinkR

ThinkR is a note-taking web application built with Node.js, Express, MongoDB, and Passport.js for user authentication. It provides secure user registration, login, and CRUD operations on notes.

---

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Running the Project Locally](#running-the-project-locally)
- [API Endpoints](#api-endpoints)
- [Request & Response Formats](#request--response-formats)
- [Contributing](#contributing)
- [License](#license)
- [Reflection](#reflection)
  
---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ThinkR.git
cd ThinkR
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
Create a .env file in the root directory with the following:

```ini
CONNECT=your_mongodb_connection_string
PASSPORT_SECRET=your_session_secret
PASSPORT_COOKIE_KEY=your_cookie_key
PORT=3000
Replace the placeholders with your actual MongoDB connection string and secret keys.
```

## Running the Project Locally
Start the server:

```bash
npm start
By default, the app will run on http://localhost:3000.
```

## API Endpoints
Routes:

```bash
GET	/	Home page after login (view notes)	N/A	Render notes list or dashboard
GET	/add	Show form to add a new note	N/A	Render add note form
POST	/add	Create a new note	{ title, content, ... }	Redirect or success message
GET	/notes/:id/edit	Show form to edit a note	N/A	Render edit note form
POST	/notes/:id/edit	Update a note	{ title, content, ... }	Redirect or success message
DELETE	/notes/:id	Delete a note	N/A	Redirect or success message
GET	/register	Show registration form	N/A	Render registration form
POST	/register	Register new user	{ username, email, password }	Redirect or success message
GET	/login	Show login form	N/A	Render login form
POST	/login	Login user	{ username, password }	Redirect or user session setup
```

## Request & Response Formats
All requests and responses use JSON format.

HTTP status codes indicate success or error (e.g., 200, 201, 400, 401, 404, 500).

Example registration request body:
```json
{
  "username": "bobH",
  "email": "bob@example.com",
  "password": "yourpassword123"
}
```

## Contributing
Contributions are very welcome! To contribute:

Fork the repository.

Create a feature branch:

```bash
git checkout -b feature/your-feature-name
Make your changes.
```

Commit your changes:

```bash
git commit -m "Add feature description"
Push your branch:
```

```bash
git push origin feature/your-feature-name
Open a Pull Request.
```

Please follow the existing code style and ensure any new features are tested.

License
This project is licensed under the MIT License.

## Reflection 
Building this project has been an incredible learning experience for me. I’ve grown not only in my technical skills—working with Node.js, MongoDB, and authentication—but also in understanding how to structure a full-stack application. Facing challenges like environment configuration, deployment, and error handling pushed me to deepen my knowledge and improve my problem-solving abilities.

This project has reinforced the importance of patience and persistence in development, especially when things don’t work as expected right away. Overall, I’m proud of what I’ve built so far, and I’m excited to continue refining this app and expanding my skills in future projects.

