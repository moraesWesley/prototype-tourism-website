var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber'); //tell the task that coud have a problem in the task
var prefixer = require('gulp-autoprefixer');

//uglify
gulp.task('uglify', function(){
    gulp.src('resources/assets/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});

//scss
gulp.task('styles', function(){
        return gulp.src('resources/assets/scss/*.scss')
        .pipe(sass(
            {outputStyle: 'expanded' } //compressed or expanded
        ))
         .pipe(plumber())
        //.pipe(prefixer('last 2 versions'))
        .pipe(gulp.dest('./public/css/'));
});

//html
gulp.task('templates', function(){
    gulp.src('resources/assets/views/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('./public/views/'));

    gulp.src('resources/assets/views/templates/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('./public/views/templates/'));
});

//bower-libs-img
gulp.task('libs', function(){
    gulp.src('bower_components/angular/angular.min.js')
    .pipe(plumber())
    .pipe(gulp.dest('./public/js/libs/')); //angular

    gulp.src('bower_components/angular-route/angular-route.min.js')
    .pipe(plumber())
    .pipe(gulp.dest('./public/js/libs')); //angular-route

    gulp.src('bower_components/reset-css/reset.css')
    .pipe(plumber())
    .pipe(gulp.dest('./public/css/'))

    gulp.src('bower_components/jquery/dist/jquery.js')
    .pipe(plumber())
    .pipe(gulp.dest('./public/js/libs/')); //Jquery

    gulp.src('bower_components/slick-carousel/slick/slick.js')
    .pipe(plumber())
    .pipe(gulp.dest('./public/js/libs/')); //slick - Jquery carousel

    gulp.src(['bower_components/slick-carousel/slick/slick.css', 'bower_components/slick-carousel/slick/slick-theme.css' ])
    .pipe(plumber())
    .pipe(gulp.dest('./public/css'));

    gulp.src('resources/assets/img/**/*.{jpg, jpeg, png}')
    .pipe(plumber())
    .pipe(gulp.dest('./public/img/'));

});

//fonts
gulp.task('fonts',function(){
    gulp.src('resources/assets/fonts/font-generator-squirrel/*.{eot, ttf, woff, woff2}')
    .pipe(plumber())
    .pipe(gulp.dest('./public/fonts/'));

});

//icon
gulp.task('icon',function(){
    //gulp.src('resources/assets/icon/fontello/font/**.*') //another possibility
    gulp.src('resources/assets/icon/fontello/font/*.{ttf,woff,woff2,eof,svg}')
    .pipe(gulp.dest('./public/icon'));

    gulp.src('resources/assets/icon/icon-img/*.png')
    .pipe(plumber())
    .pipe(gulp.dest('./public/icon/icon-img'));
});

//watch task
gulp.task('watch-dev',function(){
    gulp.start('uglify', 'styles', 'templates', 'libs', 'fonts', 'icon');
    gulp.watch('resources/assets/**', ['uglify', 'styles', 'templates']);
});

//Default Task
//gulp.task('default', ['uglify', 'styles', 'templates', 'libs', 'fonts', 'icon', 'watch-dev']);

