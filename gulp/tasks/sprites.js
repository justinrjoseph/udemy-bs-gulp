const gulp = require('gulp'),
      del = require('del'),
      svgSprite = require('gulp-svg-sprite'),
      svg2png = require('gulp-svg2png'),
      config = require('../config').sprite,
      rename = require('gulp-rename'),
      { 
        cleanSprites,
        createSvgSprite,
        createPngSprite,
        copySpriteFile,
        copySpriteCSS,
        cleanTempSprite,
        icons
      } = require('./');

gulp.task(cleanSprites, () => {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task(createSvgSprite, [cleanSprites], () => {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task(createPngSprite, [createSvgSprite], () => {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task(copySpriteFile, [createPngSprite], () => {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites/'));
});

gulp.task(copySpriteCSS, [createSvgSprite], () => {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules/'));
});

gulp.task(cleanTempSprite, [copySpriteFile, copySpriteCSS], () => {
  return del(['./app/temp/sprite']);
});

gulp.task(icons, [
  cleanSprites,
  createSvgSprite,
  createPngSprite,
  copySpriteFile,
  copySpriteCSS,
  cleanTempSprite
]);
