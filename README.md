# GULP-B3
Gulp Browserify Babelify Backbone App Sample
Backbone sample app with Gulp, Browserify, Babelify to support ES6 module, with import and export support.

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



npm install
		then
gulp start:build
