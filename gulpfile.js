const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-dart-sass');
const fileinclude = require('gulp-file-include');
const cfg = require('./package.json').config;
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const terser = require('gulp-terser');
const browserslist = ['> 1%, last 3 versions, not dead'];

function html(done) {
  return src([cfg.srcDir + '/*.html'])
    .pipe(fileinclude({ prefix: '@@', basepath: '@file' }))
    .pipe(dest(cfg.outputDir))
    .pipe(browserSync.stream({ once: true }))
    .on('end', done);
}

function styles(done) {
  return src(cfg.srcDir + 'scss/**/*.{scss,sass}', { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded', silenceDeprecations: ['legacy-js-api'] }).on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: browserslist }))
    .pipe(dest(cfg.outputDir + 'css', { sourcemaps: '.' }))
    .pipe(browserSync.stream({ once: true }))
    .on('end', done);
}

function stylesMin(done) {
  return src(cfg.srcDir + 'scss/**/*.{scss,sass}', { sourcemaps: false })
    .pipe(sass({ outputStyle: 'compressed', silenceDeprecations: ['legacy-js-api'] }).on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: browserslist }))
    .pipe(dest(cfg.outputDir + 'css'))
    .on('end', done);
}

function scripts(done) {
  return src(cfg.srcDir + 'js/**/*.js')
    .pipe(concat('script.min.js'))
    .pipe(terser())
    .pipe(dest(cfg.outputDir + 'js'))
    .pipe(browserSync.stream({ once: true }))
    .on('end', done);
}

function imageSync(done) {
  return src('src/imgs/**/*', { encoding: false })
    .pipe(dest('app/imgs'))
    .pipe(browserSync.stream({ once: true }))
    .on('end', done);
}

function browsersync(done) {
  browserSync.init({
    server: { baseDir: cfg.outputDir },
  });
  done();
}

function watching(done) {
  watch([cfg.srcDir + 'scss/**/*.scss'], styles);
  watch([cfg.srcDir + 'js/**/*.js'], scripts);
  watch([cfg.srcDir + '/**/*.html'], html);
  watch([cfg.srcDir + 'imgs/**/*'], imageSync);
  done();
}

async function loadPrettier() {
  const prettier = await import('gulp-prettier');
  return prettier.default;
}

async function pretty() {
  const prettier = await loadPrettier();
  return src(['src/**/*', '!src/imgs/**/*']).pipe(prettier()).pipe(dest('src'));
}

exports.format = pretty;
exports.cssmin = stylesMin;
exports.default = series(parallel(html, styles, scripts, imageSync), browsersync, watching);
