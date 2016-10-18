// include gulp
var gulp = require('gulp');

// include plug-ins
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())  
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix('last 10 versions'))
    .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);

});

gulp.task('default', [ 
                        'sass',
                        'sass:watch'
                      ]
          );