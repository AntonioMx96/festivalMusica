const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')

const css = () => {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle:'expanded'
        }))
        .pipe(dest('./build/css'))
}

const watchArchivos = () =>{
    watch('src/scss/**/*.scss', css)
}

exports.css = css
exports.watch = watchArchivos