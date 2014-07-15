var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var colors = require('colors');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');

var paths = {
  less: ['./src/**/*.less', './src/*.less'],
  appLess: './src/app.less',
  css: './www',
  dist: './dist',
  distfonts: './dist/fonts',
  distCss: './dist/css',
  fonts: './bower-components/bootstrap/fonts/*.*'
};


gulp.task('less', function() {
	console.log('[LESS] recompiling'.yellow);
  gulp.src(paths.appLess)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.css))
    .pipe(connect.reload());
  console.log('[CSS] minifying'.yellow);
});


gulp.task('build', function() {
	console.log('[LESS] recompiling'.yellow);
  gulp.src(paths.distCss)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.css));
  console.log('[CSS] minifying'.yellow);

  console.log('[COPY] copying over fonts'.yellow);
  gulp.src(paths.fonts)
 		.pipe(gulp.dest(paths.distfonts));
});


gulp.task('dev', function() {
	// Compile LESS on start once
	gulp.run('less');
	// Watch Less files for changes
	gulp.watch(paths.less, ['less']);
  console.log('[LESS] Watching for changes in less files'.yellow.inverse);
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
    glob: ['./www/**/*.html']
  })
    .pipe(connect.reload());
});


gulp.task('default', [], function() {
  console.log('***********************'.yellow);
  console.log('  gulp dev: start a server in the www folder and watch less files'.yellow);
  console.log('  gulp less: compile less and minify css'.yellow);
  console.log('  gulp build: build a distribution version'.yellow);
  console.log('***********************'.yellow);
  return true;
});