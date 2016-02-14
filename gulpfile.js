var gulp = require('gulp');
var foreach = require('gulp-foreach');
var stylus = require('gulp-stylus');
var nib = require('nib');

function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

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

gulp.task('watch', ['stylus'], function() {
    gulp.watch('./src/*.styl', ['stylus']).on('change', reportChange);
});

gulp.task('default', ['stylus']);
