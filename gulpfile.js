var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var sass = require('gulp-sass');
var colors = require('colors');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

var paths = {
  sass: ['./src/**/*.scss', './src/*.scss'],
  appSass: './src/app.scss',
  css: './www/css',
  dist: './dist',
  distfonts: './dist/fonts',
  distCss: './dist/css',
  fonts: './bower-components/bootstrap-sass-official/assets/fonts/bootstrap/*.*'
};


gulp.task('sass', function() {
  console.log('[SASS] recompiling'.yellow);
  gulp.src(paths.appSass)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.css))
    .pipe(connect.reload());
  console.log('[CSS] minifying'.yellow);
});


gulp.task('build', function() {
  console.log('[SASS] recompiling'.yellow);
  gulp.src(paths.appSass)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCSS())
    .pipe(rename('rise.min.css'))
    .pipe(gulp.dest(paths.distCss));
  console.log('[CSS] minifying'.yellow);

  console.log('[COPY] copying over fonts'.yellow);
  gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.distfonts));
});


gulp.task('dev', function() {
  // Compile LESS on start once
  gulp.run('sass');
  // Watch Less files for changes
  gulp.watch(paths.sass, ['sass']);
  console.log('[SASS] Watching for changes in SASS files'.yellow.inverse);
  // Start a server
  connect.server({
    root: 'www',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);
  // Watch HTML files for changes
  console.log('[CONNECT] Watching HTML files for live-reload'.blue);
  watch({
    glob: ['./www/**/*.html', './www/**/*.js']
  })
    .pipe(connect.reload());
});


gulp.task('default', [], function() {
  console.log('***********************'.yellow);
  console.log('  gulp dev: start a server in the www folder and watch LESS files'.yellow);
  console.log('  gulp sass: compile SASS and minify CSS'.yellow);
  console.log('  gulp build: build a distribution version'.yellow);
  console.log('***********************'.yellow);
  return true;
});