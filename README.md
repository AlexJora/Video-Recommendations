# Video-Recommendations



## Description

This project is a simple CRUD application built with the PERN stack (PostgreSQL, Express, React, and Node).

## Screenshots
![App1](https://raw.githubusercontent.com/AlexJora/Video-Recommendations/main/public/app1.jpg)
![App2](https://raw.githubusercontent.com/AlexJora/Video-Recommendations/main/public/app2.jpg)
![App3](https://raw.githubusercontent.com/AlexJora/Video-Recommendations/main/public/app3.jpg)

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Backend Setup](#backend)
- [Frontend Setup](#frontend)
- [Status](#status)
- [Sources](#sources)

## Technologies

- **Frontend:**
  - React
  - React Router Dom
  - Bootstrap

- **Backend:**
  - Node.js
  - Express

- **Database:**
  - PostgreSQL
    
## Features
- The application allows users to create, read, and delete videos.
- The frontend communicates with the backend through HTTP requests, and the backend interacts with the PostgreSQL database by executing database queries.
- Open the application in your web browser.
- The main page will display a list of existing videos.
- To create a new video, enter a title and URL in the input fields and click the "ADD" button.
- To delete a video, click the "delete" button under the video.
- To see a single video on a different page, click on the "VIEW VIDEO" button.
- You can search your video.
- You can rate a video and sort videos by rating.
## Backend Setup
- Clone the repository.
- Install the required dependencies by running the following command in the root directory:
 ```dotenv
npm install
```
- Create a PostgreSQL database.
- Create the table in the database and insert data by executing the following SQL queries:
```dotenv
CREATE TABLE table-name (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  url VARCHAR(200) UNIQUE,
  rating INT
);

INSERT INTO videos (title, url, rating)
VALUES
  ('title', 'url', rating),
```
- Update with your PostgreSQL connection details.
 ```dotenv
const pool = new Pool({
  user: "your_postgres_user",
  host: "",
  database: "",
  port: 5432,
});

```
## Frontend Setup
- Navigate to the frontend directory. Install the required dependencies by running the following command:
```dotenv
cd client
npm install
```

- You can run the project in two ways:

To run both the frontend and backend concurrently (frontend on port 3000 and backend on port 5000):
```dotenv
npm run dev
```
To run the backend only:
```dotenv
cd server
npm run server
```
To run the frontend only:
```dotenv
cd client
npm run start
```
**6. Building & Deployment**
To create a production build of the frontend, navigate to the frontend directory and run:
```dotenv
cd client
npm run build
```
## Status  
In progress
