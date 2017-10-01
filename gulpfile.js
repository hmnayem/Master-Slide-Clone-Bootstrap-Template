var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function(){
    gulp.src('./apps/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./apps/css'));
});

gulp.task('styles:watch', function(){
    gulp.watch("./apps/scss/app.scss", ['styles']);
});



gulp.task('default', ['styles:watch']);