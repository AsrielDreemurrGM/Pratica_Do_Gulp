const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify)
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial:False}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial:False}, gulp.series(comprimeJS));
    gulp.watch('./source/images/*', {ignoreInitial:False}, gulp.series(comprimeImagens));
}