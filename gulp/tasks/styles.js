const gulp = require('gulp'),
      postCSS = require('gulp-postcss'),
      importCSS = require('postcss-import'),
      variables = require('postcss-simple-vars'),
      mixins = require('postcss-mixins'),
      nesting = require('postcss-nested'),
      autoprefixer = require('autoprefixer');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postCSS([importCSS, variables, mixins, nesting, autoprefixer]))
    .on('error', function(error) {
      console.error(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
