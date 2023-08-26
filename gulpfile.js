// gulp functions
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');

// variables
const dir = 'src/custom-styling'
const fileName = 'custom-styles'

// Define a Gulp task to compile SCSS to CSS
gulp.task('sass', function () {
    return gulp.src(`${dir}/${fileName}.scss`) // Adjust the source path
      .pipe(sass())
      .pipe(gulp.dest(`${dir}`)); // Adjust the destination path
  });

// Define a Gulp task to minify CSS
gulp.task('minify-css', function () {
    return gulp.src(`${dir}/${fileName}.css`) // Adjust the source path
      .pipe(minify())
      .pipe(gulp.dest(`${dir}`)); // Adjust the destination path
  });

gulp.task('default', gulp.series('sass', 'minify-css'));
