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