const gulp = require('gulp'),
      webpack = require('webpack'),
      { js, modernizrTask } = require('./');

gulp.task(js, [modernizrTask], (callback) => {
  webpack(require('../../webpack.config'), (error, stats) => {
    if ( error ) {
      console.error(error.toString());
    }

    console.log(stats.toString());

    callback();
  });
});