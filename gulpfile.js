var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    mustache = require('gulp-mustache'),
    autoprefixer = require('gulp-autoprefixer'),
    fs = require('fs'),
    browserSync = require('browser-sync').create();

const DOCS_FOLDER = './docs';
const SRC_FOLDER = './src';

gulp.task("build:scss",function(){
    return gulp.src( SRC_FOLDER + '/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(DOCS_FOLDER));
});

gulp.task("build:html",function(){
    var content = fs.readFileSync('./src/index.json');
    var templData = JSON.parse(content);

    return gulp.src("./src/**/*.html")
        .pipe(mustache(templData, {extension: '.html'}))
        .pipe(gulp.dest("./docs"));
});

gulp.task('serve', ['build:scss', 'build:html'], function() {
    browserSync.init({
      server: {
        baseDir: DOCS_FOLDER,
        index: 'index.html'
      }
    });
    gulp.watch('src/*.scss', ['build:scss']);
    gulp.watch('src/*.html', ['build:html']);
    gulp.watch([DOCS_FOLDER + '/*.html',DOCS_FOLDER + '/*.css']).on('change', browserSync.reload);
});
