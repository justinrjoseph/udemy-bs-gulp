const gulp = require('gulp'),
      del = require('del'),
      svgSprite = require('gulp-svg-sprite'),
      config = require('../config').sprite,
      rename = require('gulp-rename');

gulp.task('cleanSprites', () => {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['cleanSprites'], () => {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteFile', ['createSprite'], () => {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites/'));
});

gulp.task('copySpriteCSS', ['createSprite'], () => {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules/'));
});

gulp.task('cleanTempSprite', ['copySpriteFile', 'copySpriteCSS'], () => {
  return del(['./app/temp/sprite']);
});

gulp.task('icons', [
  'cleanSprites',
  'createSprite',
  'copySpriteFile',
  'copySpriteCSS',
  'cleanTempSprite'
]);
