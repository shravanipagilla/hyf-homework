//This exercise is repetition of array functions. you dont have to use chaining or anything fancy. 
//Just fetch the movies and use the correct array function to get the following movies:

let moviesUrl = ' https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
//1.Create an array of bad movies
// 2.Creat an array of bad movies since year 2000
fetch(moviesUrl)
.then(response =>response.json())
.then(movies =>{
    console.log(movies);
    const badMovies = movies.filter(movie=>movie.rating<3);
    const badMoviesFrom2000 = badMovies.filter(movie=>movie.year>=2000);
    console.log(badMovies);
    console.log(badMoviesFrom2000);

});