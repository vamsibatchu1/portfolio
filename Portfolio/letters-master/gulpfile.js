var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    insert = require('gulp-insert');

/**
 * Create distributable versions
 */
gulp.task('dist', function(){
    return gulp.src('letters.js')
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('.'));
});

/**
 * Default task
 */
gulp.task('default', ['dist']);