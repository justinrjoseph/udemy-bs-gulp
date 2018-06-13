const gulp = require('gulp'),
      del = require('del'),
      imagemin = require('gulp-imagemin'),
      usemin = require('gulp-usemin'),
      revision = require('gulp-rev'),
      cssMinify = require('gulp-cssnano'),
      uglifyJS = require('gulp-uglify'),
      browser = require('browser-sync').create(),
      {
        deleteDist,
        copyMiscFiles,
        optimizeImgs,
        icons,
        useminTask,
        css,
        js,
        build,
        previewDist
      } = require('./');

gulp.task(deleteDist, () => del('./dist'));

gulp.task(copyMiscFiles, [deleteDist], () => {
  const filePaths = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];

  return gulp.src(filePaths)
    .pipe(gulp.dest('./dist'));
});

gulp.task(optimizeImgs, [deleteDist, icons], () => {
  return gulp.src([
    './app/assets/images/**/*',
    '!./app/assets/images/icons',
    '!./app/assets/images/icons/**/*'
  ])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task(useminTask, [deleteDist, css, js], () => {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [revision, cssMinify],
      js: [revision, uglifyJS]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task(previewDist, () => {
  browser.init({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task(build, [
  deleteDist,
  copyMiscFiles,
  optimizeImgs,
  useminTask
]);