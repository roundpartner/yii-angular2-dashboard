var gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del(['dist/**/*', 'json/**/*']);
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src('src/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/rxjs/operator/map.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/http.dev.js',
            'node_modules/angular2/bundles/router.dev.js'
        ])
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:json', ['clean'], function() {
    return gulp.src(['src/json/**/*'], { base : './src/json' })
        .pipe(gulp.dest('json'))
});

gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['src/news/**/*', 'src/index.html', 'src/styles.css', '!src/news/**/*.ts'], { base : './src' })
        .pipe(gulp.dest('dist'))
});

gulp.task('build', ['compile', 'copy:libs', 'copy:assets', 'copy:json']);
gulp.task('default', ['build']);
