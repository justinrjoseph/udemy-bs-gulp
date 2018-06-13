const gulp = require('gulp'),
      webpack = require('webpack');

gulp.task('js', ['modernizr'], (callback) => {
  webpack(require('../../webpack.config'), (error, stats) => {
    if ( error ) {
      console.error(error.toString());
    }

    console.log(stats.toString());

    callback();
  });
});