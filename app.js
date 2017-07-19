var movie = require("./movie.js");
var threeFavoriteMovies = ["scream", "gladiator", "se7en"];
threeFavoriteMovies.forEach(function(film){
  // your code here
  	
  	movie(film);


});
module.exports = threeFavoriteMovies;