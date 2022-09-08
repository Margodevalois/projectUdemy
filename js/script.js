const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const answer1 = prompt('Один из последних просмотренных фильмов?', '');
const answer2 = prompt('На сколько вы его оцените?', '');
const answer3 = prompt('Один из последних просмотренных фильмов?', '');
const answer4 = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;

console.log(personalMovieDB);