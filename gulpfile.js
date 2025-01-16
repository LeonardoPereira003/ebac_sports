const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

// Função para comprimir imagens
function comprimeImagens(){
    return gulp.src('./source/images/**/*.{jpg,png,gif,svg}')  // Incluindo diferentes tipos de imagem
        .on('data', function(file) {
            console.log('Imagem encontrada: ' + file.relative);  // Log da imagem sendo processada
        })
        .pipe(imagemin({verbose: true}))  // Ativando modo verbose para obter mais detalhes no log
        .pipe(gulp.dest('./build/images'));
}

// Função para comprimir JavaScript
function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

// Função para compilar Sass
function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')); 
}

// Tarefa padrão
exports.default = function(){
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/images/**/*.{jpg,png,gif,svg}', { ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(comprimeJavaScript));
}
