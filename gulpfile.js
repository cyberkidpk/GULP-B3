var gulp = require('gulp'),
print = require('gulp-print'),
babel = require('gulp-babel'),
concat = require('gulp-concat'),
del = require('del'),
webserver = require('gulp-webserver'),
sourcemaps = require('gulp-sourcemaps'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
browserify = require('browserify'),
watchify = require('watchify'),
babel = require('babelify'),
browserifyCSS= require('browserify-css');


function compile(watch) {
  var bundler = watchify(browserify(['./public/app/aamain.js'], { debug: true }).transform(babel));
  bundler.transform('browserify-css', {
    minify: true,
    output: './public/build/bundle.css'
    });

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./public'))
      .pipe(gulp.dest('./public/build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};
gulp.task('clean:build', function () {
    return del([
      "public/build/**/*.*"
    ]);
  });
gulp.task('libs', function(){
    return gulp.src([
        "public/core-and-plugins/backbone.marionette/jquery.js", 
            "public/core-and-plugins/backbone.marionette/underscore.js", 
            "public/core-and-plugins/backbone.marionette/backbone.js",
            "public/core-and-plugins/backbone.marionette/backbone.marionette.min.js",
            "public/core-and-plugins/backbone.marionette/json2.js",
            "public/core-and-plugins/backbone.marionette/backbone.radio.js",
        ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('public/build/vendors'));
    });
    gulp.task('htmlCss', function(){
        return gulp.src(['public/**/*.html', 'app/**/*.css'])
                .pipe(print())
                .pipe(gulp.dest('public/build'));
        });
var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
  };
//start web server 
gulp.task('serve', ['build'], function() {
        gulp.src('public/build')
            .pipe(webserver({open: true,port:9000,mimeTypes:mimeTypes}));
});

//main task
gulp.task('build', ['libs', 'htmlCss', 'watch'], function() { return compile(); });

//watch
gulp.task('watch', function() { return watch(); });

gulp.task('start:build', ['clean:build'],function(){
    //fire after cleaning
    gulp.start('serve')
})