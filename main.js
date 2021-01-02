'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        do {
             this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        } while (this.count == '' || this.count == null || isNaN(this.count));
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                  b = prompt('На сколько вы его оцените?','');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;   
                console.log('Done!');
            } else {
                console.log('error');
                i--;                   // возвращаем назад чтобы задавать вопрос пока условие не выполниться
            }   
        }
    },
    decectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классичекий зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        } 
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            do {
                this.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();
            } while (!this.genres[i - 1]);            
        }
        this.genres.sort();
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.decectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
