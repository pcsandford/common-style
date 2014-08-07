var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var jsoncombine = require("gulp-jsoncombine");
var sass = require('gulp-sass');
var colors = require('colors');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');

var paths = {
  sass: ['./src/**/*.scss', './src/*.scss'],
  appSass: './src/app.scss',
  css: './www/css',
  dist: './dist',
  distFonts: './dist/fonts',
  distCss: './dist/css',
  fonts: './bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*.*'
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


gulp.task('pickFromBower', function() {
  return gulp.src(mainBowerFiles(), {
      base: './bower_components',
    })
    .pipe(gulp.dest('./www/bower_components'));
});

gulp.task("json-move", function() {
  // in case some files have the same name
  var index = 0;
  return gulp.src(["src/locales/en/*.json",
    "bower_components/*/dist/locales/en/*.json"])
    .pipe(rename(function (path) {
      path.dirname = "";
      path.basename += index++;
    }))
    .pipe(gulp.dest("tmp/locales/en"));
});

gulp.task("json-combine", ["json-move"], function() {
  return gulp.src("tmp/locales/en/*.json")
    .pipe(jsoncombine("translation.json",function(data) {
      var jsonString,
        newData = {};

      for (var filename in data) {
        var fileObject = data[filename];
        for (var attrname in fileObject) {
          newData[attrname] = fileObject[attrname];
        }
      }

      jsonString = JSON.stringify(newData, null, 2);
      return new Buffer(jsonString);
    }))
    .pipe(gulp.dest("www/locales/en"));
});

gulp.task('build', ["json-combine"], function() {
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
    .pipe(gulp.dest(paths.distFonts));
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
