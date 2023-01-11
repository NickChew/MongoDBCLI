
class Movie {
    constructor (inputTitle, inputActor="NA!", inputDirector="NA!", inputRating="NA!") {
      this.title = inputTitle;
        //this assigns the inputTitle parameter to object we are creating
      this.actor = inputActor;
        //this assigns the inputActor parameter to object we are creating
      this.director = inputDirector;
        //this assigns the inputDirector parameter to object we are creating
      this.rating = inputRating;
        //this assigns the inputRating parameter to object we are creating
    };
    async create (movieCollection) {
      //code to save a movie to the database here
      console.log ("Entering Add within index.js");
      await movieCollection.insertOne(this);
       // insertOne is the method that actually inserts the movie object into our collection 
       // in the database that we were passed (movieCollection)
    };
    async update (movieCollection) {
      console.log ("Entering Update within index.js");
      await movieCollection.updateOne(this);
    };
};

module.exports = Movie;
