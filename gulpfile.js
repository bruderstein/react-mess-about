var Path = require('path');
var _ = require('lodash');
var Gulp = require('gulp');
var Browserify = require('browserify');
var Watchify = require('watchify');
var Babelify = require('babelify');
var Source = require('vinyl-source-stream');
var SourceMaps = require('gulp-sourcemaps');
var Concat = require('gulp-concat');
var GBuffer = require('gulp-buffer');

var outputPath = 'build';

function addBundleOptions(bundle) {
    bundle.transform(Babelify);
    bundle.add(__dirname + '/src/start.js');
    return bundle;
}

Gulp.task('start-watchify', function () {
    var browserifyOptions = _.extend({}, Watchify.args, { debug: true, extensions: ['.jsx'] });
    var browserify = Browserify(browserifyOptions);
    var bundle = Watchify(browserify);
    addBundleOptions(bundle);
    writeBundle(bundle);

    bundle.on('update', function () {
        writeBundle(bundle)
    });

});


function writeBundle(bundle) {
    return bundle.bundle()
        .pipe(Source('app.js'))
        .pipe(GBuffer())
        .pipe(SourceMaps.init({ loadMaps: true }))
        .pipe(SourceMaps.write('../maps'))
        .pipe(Gulp.dest(Path.join(outputPath, 'js')));
}


Gulp.task('js', function() {
    var bundle = Browserify({ debug: true, extensions: [ '.jsx' ] });
    addBundleOptions(bundle);
    return writeBundle(bundle);
});

Gulp.task('index', function () {
    return Gulp.src('src/*.html')
        .pipe(Gulp.dest(outputPath));
});


Gulp.task('default', ['js', 'index']);
Gulp.task('watch', ['js', 'start-watchify', 'index'], function () {
    Gulp.watch('src/*.html', ['index']);
});