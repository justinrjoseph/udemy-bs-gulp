const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browser = require('browser-sync').create();

gulp.task('watch', () => {
  browser.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', () => browser.reload());

  watch('./app/assets/styles/**/*.css', () => gulp.start('injectCSS'));
});

gulp.task('injectCSS', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browser.stream());
});
