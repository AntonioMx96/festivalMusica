const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify')
const webp = require('gulp-webp')
const concat = require('gulp-concat')

//utilidad css
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')

//js
const terser = require('gulp-terser-js')

const css = () => {
    return src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'))
}

const javascript = () => {
    return src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/js'))
}

const imagenes = () => {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagen Minificada' }))
}

const versionwebp = () => {
    return src('src/img/**/*')
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'webp lista' }))
}

const watchArchivos = () => {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript)
}

exports.css = css
exports.imagenes = imagenes
exports.watch = watchArchivos
exports.versionwebp = versionwebp
exports.default = series(css, javascript)