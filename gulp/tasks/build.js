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
        useminTrigger,
        useminTask,
        css,
        js,
        build,
        previewDist
      } = require('./');

gulp.task(deleteDist, [icons], () => del('./docs'));

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
    .pipe(gulp.dest('./docs'));
});

gulp.task(optimizeImgs, [deleteDist], () => {
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
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task(useminTrigger, [deleteDist], () => {
  gulp.start(useminTask);
});

gulp.task(useminTask, [css, js], () => {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [revision, cssMinify],
      js: [revision, uglifyJS]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task(previewDist, () => {
  browser.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task(build, [
  deleteDist,
  copyMiscFiles,
  optimizeImgs,
  useminTrigger
]);