
require('dotenv').config();
// This imports the .env 'enviroment variables' library which allows us to store our login details 
// securely in the .env files. It also runs the config method to make the variable available 
// immediately.

const { MongoClient } = require ("mongodb");
//This imports the MongoClient method from MongoDB which allows to open and close our connection to the database

const client =  new MongoClient(process.env.MONGO_URI);
//This opens the connection to the database whose login details are contained in the enviroment variable MONGO_URI

async function connect() {
  try {       //to catch error by using try catch method
      await client.connect();     // Because this is a async function the connection must be awaited
      const db = client.db("CodeNation");  // use "CodeNation" As this is the name of the database we are connecting to we previously set up in mongoDB
      return db.collection("Movie");  // This is the name of the Collection (think table) that will be created in our database
  } catch (error) {
      console.log(error);
  }
}

module.exports = {client, connect};  // exports the object client with the function connect