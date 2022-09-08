const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};



// const answer1 = prompt('Один из последних просмотренных фильмов?', '');
// const answer2 = prompt('На сколько вы его оцените?', '');
// const answer3 = prompt('Один из последних просмотренных фильмов?', '');
// const answer4 = prompt('На сколько вы его оцените?', '');

// personalMovieDB.movies[answer1] = answer2;
// personalMovieDB.movies[answer3] = answer4;

for (let i = 0; i < 2; i++) {
    const answer1 = prompt('Один из последних просмотренных фильмов?', '');
    const answer2 = prompt('На сколько вы его оцените?', '');

    if (answer1 != null && answer2 != null && answer1 != '' && answer2 !='' && answer1.length <50) {
        personalMovieDB.movies[answer1] = answer2;
    } else {
        i--;
    }
}

if (personalMovieDB.count <=10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классный зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('error');
}

console.log(personalMovieDB);