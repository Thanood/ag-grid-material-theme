var gulp = require('gulp');
var foreach = require('gulp-foreach');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('stylus', function() {
    gulp.src('./src/*.styl')
        .pipe(foreach(function(stream, file) {
            return stream
                .pipe(stylus({
                    use: nib(),
                    compress: false
                }))
                .pipe(gulp.dest('./dist/'));
        }));
});

gulp.task('default', ['stylus']);
