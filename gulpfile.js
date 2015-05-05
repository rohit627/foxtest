var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync').create();
var notify = require('gulp-notify');
var reload = browsersync.reload;

gulp.task('serve',['sass'], function() {
    browsersync.init({
        server: '.'
    });
    gulp.watch('sass/**/*.scss',['sass']);
    gulp.watch('*.html').on('change',reload);

})
gulp.task('sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass({
            errorLogToConsole: false,
            onError: notify.onError({message: 'Error'})
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream: true}))
});

gulp.task('default',['serve']);