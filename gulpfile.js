const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Função para compilar o Sass
function compilaSass() {
    return gulp.src('./source/styles/main.scss')  // Caminho do arquivo Sass
        .pipe(sass({                             // Compilação do Sass
            outputStyle: 'compressed'            // Geração do CSS comprimido
        }))
        .pipe(gulp.dest('./build/styles'));      // Destino do arquivo CSS compilado
}

// Função de exemplo para simular uma tarefa com delay
function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Executando via funcaoPadrao");
        callback();  // Chama o callback para sinalizar o fim da tarefa
    }, 2000);
}

// Função que imprime "Oi" e chama outra função com atraso
function dizOi(callback) {
    setTimeout(function() {
        console.log("Oi, estou dizendo oi!");
        dizTchau(callback);  // Chama dizTchau e passa o callback
    }, 1000);
}

// Função que imprime "Tchau"
function dizTchau(callback) {
    console.log("Tchau, estou indo!");
    callback();  // Chama o callback para sinalizar o fim da tarefa
}

// Expondo as tarefas para o Gulp
exports.default = gulp.parallel(funcaoPadrao, dizOi);  // Executa as duas funções em paralelo
exports.dizOi = dizOi;  // Tarefa dizOi
exports.sass = compilaSass;  // Tarefa Sass
