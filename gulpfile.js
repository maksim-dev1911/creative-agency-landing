import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulp from 'gulp'

const sass = gulpSass(dartSass);

export function buildStyles() {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src/css'));
  };

export function watch () {
  gulp.watch('./src/scss/**/*.scss', gulp.series(buildStyles));
};

