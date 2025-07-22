const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return src('scss/styles.scss')     // your main SCSS file
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./'));               // output to root as styles.css
}

exports.sass = compileSass;
