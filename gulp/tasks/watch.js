const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browser = require('browser-sync').create(),
      { watchTask, injectCSS, refreshJS, css, js} = require('./');

gulp.task(watchTask, () => {
  browser.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', () => browser.reload());

  watch('./app/assets/styles/**/*.css', () => gulp.start(injectCSS));

  watch('./app/assets/scripts/**/*.js', () => gulp.start(refreshJS));
});

gulp.task(injectCSS, [css], () => {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browser.stream());
});

gulp.task(refreshJS, [js], () => browser.reload());
