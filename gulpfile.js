const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('src/project-sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('dist/css'))
}

function watchTask() {
  watch(['src/project-sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)