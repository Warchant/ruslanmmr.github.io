var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'); // Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss') // Берем источник
        .pipe(sass().on('error', notify.onError({
            message: "<%= error.message %>",
            title: "Sass Error!"
        }))) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(cssnano())
        .pipe(rename('common.min.css')) 
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/libs/**/*.css', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('clean', function() {
    return del.sync('css');
    return del.sync('libs');
    return del.sync('fonts');
    return del.sync('js');
    return del.sync('img');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') 
        .pipe(gulp.dest('img')); 
});

gulp.task('build', ['clean', 'img', 'sass'], function() {

    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('css'))

    var buildCss = gulp.src('app/libs/**/*')
        .pipe(gulp.dest('libs'))
    
    var buildFonts = gulp.src('app/fonts/**/*') 
        .pipe(gulp.dest('fonts'))

    var buildJs = gulp.src('app/js/**/*') 
        .pipe(gulp.dest('js'))

    var buildHtml = gulp.src('app/*.html') 
        .pipe(gulp.dest('.'));

});

gulp.task('clear', function() {
    return cache.clearAll();
})

gulp.task('default', ['watch']);