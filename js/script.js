// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 2; i++) {
            const answer1 = prompt('Один из последних просмотренных фильмов?', '').trim();
            const answer2 = prompt('На сколько вы его оцените?', '');
        
            if (answer1 != null && answer2 != null && answer1 != '' && answer2 !='' && answer1.length <50) {
                personalMovieDB.movies[answer1] = answer2;
            } else {
                i--;
            }
        }
    },
    detectPesonalLevel: function(){
        if (personalMovieDB.count <=10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классный зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('error');
        }
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++) { 
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
        }
    }
};

// const answer1 = prompt('Один из последних просмотренных фильмов?', '');
// const answer2 = prompt('На сколько вы его оцените?', '');
// const answer3 = prompt('Один из последних просмотренных фильмов?', '');
// const answer4 = prompt('На сколько вы его оцените?', '');

// personalMovieDB.movies[answer1] = answer2;
// personalMovieDB.movies[answer3] = answer4;