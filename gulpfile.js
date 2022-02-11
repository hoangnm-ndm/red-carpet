var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

// gulp.watch('watch', function() {
//     gulp.watch('./scss/main.scss', ['sass']);
// })


// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: 'c-base'
//         },
//     })
// })

// gulp.task('watch', ['browserSync'], function() {
//     gulp.watch('./scss/main.scss', ['sass']);
// })


// gulp.task('watch', ['browserSync', 'sass'], function() {
//     gulp.watch('./scss/main.scss', ['sass']);
// });