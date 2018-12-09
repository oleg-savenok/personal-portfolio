const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    browserify = require('gulp-browserify'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');
    cssnano = require('gulp-cssnano');

function log(error) {
    console.log(
        [
            '',
            '----------ERROR MESSAGE START----------',
            '[' + error.name + ' in ' + error.plugin + ']',
            error.message,
            '----------ERROR MESSAGE END----------',
            '',
        ].join('\n')
    );
    this.end();
}

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: 'public',
        },
        reloadDelay: 10,
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('pages', function() {
    //let data = require('./src/pages/data/projects.json');
    return (
        gulp
            .src('src/pages/*.html')
            // .pipe(jade({
            //     compileDebug: true,
            //     locals: data
            // }))
            .pipe(gulp.dest('public'))
    );
});

gulp.task('styles', function() {
    return gulp
        .src('src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['cover 99.5%'],
            })
        )
        .pipe(gulp.dest('public/styles'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/styles'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('styles-min', function() {
    return gulp
        .src('src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['cover 99.5%'],
            })
        )
        .pipe(
            cssnano({
                zIndex: false,
                reduceIndents: false,
            })
        )
        .pipe(gulp.dest('public/styles'));
});

gulp.task('js', function() {
    gulp.src('src/scripts/main.js')
        .pipe(sourcemaps.init())
        .pipe(
            browserify({
                insertGlobals: true,
                debug: true,
            })
        )
        .pipe(uglify())
        .pipe(gulp.dest('public/scripts'));
});

gulp.task('js-min', function() {
    gulp.src('src/scripts/main.js')
        .pipe(
            browserify({
                insertGlobals: true,
                debug: true,
            })
        )
        .pipe(uglify())
        .pipe(gulp.dest('public/scripts'));
});

gulp.task('watch', ['pages', 'styles', 'js', 'browser-sync'], function() {
    gulp.watch('src/pages/**/*.html', ['pages', 'bs-reload']);
    gulp.watch('src/scripts/*.js', ['js', 'bs-reload']);
    gulp.watch('src/styles/**/*.scss', ['styles']);
});

gulp.task('build', ['pages', 'styles-min', 'js-min'], function() {});
