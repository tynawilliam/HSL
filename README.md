# HSL Survey

## Software Architecture

This HSL survey application was built on a TypeScript, NestJS and PostgreSQL backend and a React frontend. The user database model stores the unique IDs of experiment participants, allowing the API to validate userId before serving up the questions. Whilst the user is only able to "interact" with the database via submission of answers, I have designed the API with full CRUD functionality to enable admins to later retrieve user data (including all previously submitted questions and answers).

To run the application, follow the below steps:

- Clone this repository
- run "npm install"
- run npm start to run the app in development mode.

To run just the API - follow the beklow steps

- cd into "hsl-backend"
- run "npm run start:dev" to start the app in watch mode
- run "npm run start" to start the app in development mode
- test API using below endpoints

## Database Schema

![alt Database Schema](https://github.com/tynawilliam/HSL/blob/main/documentation/images/schema.png?raw=true)

## API Endpoints

## Users

## API Path '/api/users'

- POST / - create a new user
- GET / - returns all users and their associated data.
- GET /:id - returns user at id and their associated data.
- PUT /:id - update user at specified id (only the user ID can be updated)
- DELETE /:id - delete user at specified id.

## Questions

## API Path '/api/questions'

- POST / - create a new questions.
- GET / - returns all questions currently in the database.
- GET /:id - returns question at specified id.
- PUT /:id - update question at specified id.
- DELETE /:id - delete question at specified id.

## Answers

## API Path '/api/answers'

- POST / - add a new answer (upon submission of survey)
- GET / - returns a list of questions and answers as well as the user who gave the answer.
- GET /:id - returns question at id and its associated data.
