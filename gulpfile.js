var gulp = require('gulp'),
    concat = require('gulp-concat'),
    karma = require('gulp-karma'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

var appPaths = [
  './src/js/app.js',
  './src/js/config.js',
  './src/js/controllers/*.js',
  './src/js/services/*.js', 
  './src/js/directives/*.js'
];

var vendorPaths = [
  './bower_components/angular/angular.js',
  './bower_components/angular-resource/angular-resource.js',
  './bower_components/angular-ui-router/release/angular-ui-router.js'
];

var stylesheetsPaths = [
  './src/stylesheets/**/*.less',
];

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 9000,
    livereload: true
  });
});

gulp.task('scripts.app', function() {
  gulp.src(appPaths)
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(connect.reload());
});

gulp.task('scripts.vendor', function() {
  gulp.src(vendorPaths)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(connect.reload());
});

gulp.task('scripts.templates', function() {
  gulp.src('./src/templates/*.html')
      .pipe(gulp.dest('dist/templates'))
      .pipe(connect.reload());

  gulp.src('./src/index.html')
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
});

gulp.task('scripts.stylesheets', function() {
  gulp.src(stylesheetsPaths)
      .pipe(less())
      .pipe(gulp.dest('./dist/css'))
      .pipe(connect.reload());
});

gulp.task('build', [
  'scripts.vendor', 'scripts.app', 'scripts.templates', 'scripts.stylesheets'
]);

gulp.task('watch', function() {
  gulp.watch(appPaths, ['scripts.app']);
  gulp.watch(['./src/templates/*.html', './src/index.html'], ['scripts.templates']);

  gulp.watch(stylesheetsPaths, ['scripts.stylesheets']);
});

gulp.task('default', ['build', 'watch', 'connect']);
