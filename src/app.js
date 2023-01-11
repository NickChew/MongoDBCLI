const {client, connect} = require("./db/connection");
const yargs = require('yargs');
const Movie = require('./utils/index');

async function app(yargsObject) {
    const movieCollection = await connect();
    if (yargsObject.create) {
      // code to create a movie goes here  check spellings and is case sensitive!!
      console.log("Entering create");
      const newMovie = new Movie (yargsObject.title, yargsObject.actor, yargsObject.director);
      await newMovie.create(movieCollection);
    
    } else if (yargsObject.update) {
      // code to update the details in a movie use updateOne
      console.log("Entering Actor Update");
        const myQuery = {title: yargsObject.title};
        const myUpdate ={$set: { actor: yargsObject.actor}};
        const result = await movieCollection.updateOne(myQuery,myUpdate); // finds the title and updates the actor
        if (result.modifiedCount === 1) {
            console.log ("Actor update successful");
        } else {
            console.log("update unsuccessful");
        }
    
    } else if (yargsObject.read) {
      // code to list all movies go here using findOne({})
      console.log("Entering read");
      const results = await movieCollection.find({}).toArray();
      console.table(results);
      
    } else if (yargsObject.delete) {
      // code to delete a movie will go here using deleteOne
      console.log("Entering Delete");
      const myQuery = {title: yargsObject.title};
      const result = await movieCollection.deleteOne(myQuery);
      if (result.deletedCount === 1 ) {
          console.log ("Film successfully deleted");
      } else {
          console.log ("Film not deleted");
      }
    } else if (yargsObject.addRating) {
    // code goes here to add a rating 
      const newMovie = new Movie (yargsObject.title, yargsObject.actor, yargsObject.director, yargsObject.rating);
      await newMovie.create(movieCollection);
    } else {
      console.log("command not recogised");
    };
    await client.close();
};

app(yargs.argv);
