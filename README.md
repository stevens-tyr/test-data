# Test Data Repository

This is a repository that is meant to quickly insert new data into our test database for presentational purposes

## To Get the Data:

1. Clone this repository

2. cd into the Repo and install the dependencies

    `npm i`

3. Make sure that the mongoDB daemon is running and run the index.js file

    `npm start`

*This script currently inserts into the local MongoDB database. To change this, change the connection string, `mongoUrl` in `config/mongoConnection.js`