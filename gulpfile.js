import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import minifyjs from 'gulp-js-minify';
import cleanCSS from 'gulp-clean-css';

const BS = browserSync.create();
const sass = gulpSass(dartSass);



function cleanCss() {
    return gulp.src('./dist/css/*.css')
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('./dist/css'));
};

function minifyJs() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(minifyjs())
        .pipe(gulp.dest('./dist/script'));
}



// ----

function buildStyles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
}

const moveImages = () => gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img/'));

const myScript = () => gulp.src('./src/scripts/**/*.js')
    .pipe(gulp.dest('./dist/scripts'));

export const dev = gulp.series(buildStyles, moveImages, myScript, minifyJs, cleanCss, () => {
    BS.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/**/*', gulp.series(buildStyles, (done) => {
        BS.reload();
        done();
    }))
});