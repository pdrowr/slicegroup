var gulp = require('gulp');
var sass = require('gulp-sass');
var haml = require('gulp-ruby-haml');
var htmlbeautify = require('gulp-html-beautify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var merge = require('merge-stream');
var rucksack = require('gulp-rucksack');
//initialize server
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})


//Delete dist folder
gulp.task('clean:dist', function() {
  return del.sync('dist');
})
//------------ JQUERY
gulp.task('add_jquery', function() {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('app/js'));
});

gulp.task('remove_jquery', function(){
  return del.sync(['app/js/jquery.min.js'])
});

//------------ END - JQUERY

//------ BOOTSTRAP ---------
gulp.task('add_bootstrap', function(){
  var bootstrap_js = gulp.src('node_modules/bootstrap/dist/js/bootstrap.js')
  .pipe(gulp.dest('app/js'));

  var bootstrap_css = gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
  .pipe(gulp.dest('app/css'));

  return merge(bootstrap_js, bootstrap_css)
});

gulp.task('remove_bootstrap', function(){
  return del.sync(['app/css/bootstrap.min.css', 'app/js/bootstrap.js'])
});

//------ END BOOTSTRAP ----------


//------ MATERIALIZE ----------

gulp.task('add_materialize', function(){
  var material_js = gulp.src('node_modules/materialize-css/dist/js/materialize.min.js')
  .pipe(gulp.dest('app/js'));

  var material_css = gulp.src('node_modules/materialize-css/sass/materialize.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'));

  return merge(material_js, material_css)
});


//------ END - MATERIALIZE ----

//Save cache and minify images
gulp.task('images', function(){
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/assets/img'))
});


//Move fonts to dist/fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'))
});
//Move new .css files
gulp.task('css', function() {
  return gulp.src('app/css/**/*.css')
  .pipe(gulp.dest('dist/assets/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('js', function() {
  return gulp.src('app/js/**/*.js')
  .pipe(gulp.dest('dist/assets/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//Compile .scss to .css
gulp.task('compile_sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(rucksack())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('compile_haml', function(){
  return gulp.src('app/*.haml')
    .pipe(haml({doubleQuote: true})) // Converts Haml to HTML with gulp-haml
    .pipe(htmlbeautify({
      "indent_size": 2,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


//Watch function
gulp.task('default', ['browserSync', 'compile_haml', 'compile_sass', 'css', 'js'], function(){
  gulp.watch('app/scss/**/*.scss', ['compile_sass']);
  gulp.watch('app/**/*.haml', ['compile_haml']);
  gulp.watch('app/css/*.+(css|min.css)', ['css']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/img/**/*.+(png|jpg|jpeg|gif|svg)', browserSync.reload);

  // Other watchers
});


gulp.task('set', function (callback) {
  runSequence('clean:dist', 'add_jquery',
    ['compile_haml','compile_sass', 'images', 'fonts', 'css', 'js']
  )
});

//gulp.task('default', function (callback) {
//  runSequence(['compile_haml', 'compile_sass', 'css', 'js', 'browserSync', 'watch']
//  )
//});
//gulp.task('default', function (callback) {

//  runSequence('watch')
//});
