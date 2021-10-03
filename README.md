# Custody X Change API

This API was developed with Node.JS version 14.17.4 and TypeScript version 4.4.3.

## Run the API
Follow the steps below to run the API:

- First, use the command `npm install` to install all the dependencies;
- Then, create a `.env` file base on the existing `.env.example` file, like below:
```
APP_PORT=8080
EXTERNAL_API_HOST=https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json
```
- Finally, just run the command `npm start` and the API will listen the port you set in the `.env` file.
