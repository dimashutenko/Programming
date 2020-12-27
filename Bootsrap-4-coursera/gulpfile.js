//command: gulp start

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var rev_append = require('gulp-rev-append');
var revCollector = require('gulp-rev-collector');
var cleanCss = require('gulp-clean-css');
var flatmap = require('gulp-flatmap');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
var gulpif = require('gulp-if');
var useref = require('gulp-useref');
const autoprefixer = require('gulp-autoprefixer');
var es = require('event-stream');
var browserSync = require('browser-sync').create();

const { src, dest, parallel, series} = require('gulp');

//compiling scss into css

function style(){
	return gulp.src('./css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
}

function watch(){
	var files = [
    	'./*.html',
    	'./css/*.css',
    	'./img/*.{png,jpg,gif}',
    	'./js/*.js'
   	];

	browserSync.init(files, {
		server: {
			baseDir:'./'
		}
	});
	gulp.watch('./css/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/*.js').on('change', browserSync.reload);
}


function clean (cb){
	return del(['dist']);
	cb();
}

function copy_fonts(cb){
	gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
   cb();
}

function copy_scripts() {
	return src([ // Берём файлы из источников
		'node_modules/jquery/dist/jquery.slim.min.js', // Пример подключения библиотеки
		'node_modules/popper.js/dist/umd/popper.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'js/scripts.js' // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
		])
	.pipe(concat('main.js')) // Конкатенируем в один файл
	.pipe(uglify()) // Сжимаем JavaScript
	.pipe(dest('dist/js/')) // Выгружаем готовый файл в папку назначения
}


function copy_styles() {
	return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/font-awesome/css/font-awesome.min.css','node_modules/bootstrap-social/bootstrap-social.css','./css/styles.css','./css/media.css'])
		.pipe(concat('main.css')) // Конкатенируем в файл app.min.js
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
		.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
		.pipe(dest('dist/css/')) // Выгрузим результат в папку
}

function copy_html(){
	return gulp.src('*.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('./dist'));
}

function copy_img(cb){
	gulp.src('./img/*.{png,jpg,gif}')
   	.pipe(gulp.dest('./dist/img/'));
   	cb();
}

// function rev_append(cb){
// 	gulp.src('index.html')
//     .pipe(rev())
//     .pipe(gulp.dest('./dist/'));
//     cb();
// }


// exports.rev = () => (
// 	gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/font-awesome/css/font-awesome.min.css','node_modules/bootstrap-social/bootstrap-social.css','./css/styles.css','./css/media.css'])
//  		.pipe(concat('styles.css'))
// 		.pipe(gulp.dest('./dist/css'))  // Copy original assets to build dir
// 		.pipe(rev())
// 		.pipe(gulp.dest('./dist/css'))  // Write rev'd assets to build dir
// 		.pipe(rev.manifest())
// 		.pipe(gulp.dest('./'))  // Write manifest to build dir
// );


// exports.rev_collector = () => (
//     gulp.src(['./rev-manifest.json', './dist/index.html'])
//         .pipe( revCollector({
//             replaceReved: true,
//         }) )
//         .pipe( gulp.dest('dist') )
// );

// exports.useref = () => (
//   	gulp.src('index.html')
//     .pipe(useref({ searchPath: './' }))
//     .pipe(gulp.dest('dist'))
// );


// gulp.task('rev-html-img', function () {
//     return gulp.src('./*.html')
//         .pipe(useref())
//         .pipe(gulpif('*.js', uglify()))
//         .pipe(gulpif('*.css', cleanCss()))
//         .pipe(gulp.dest('dist'));
// });

function ref(cb){
    gulp.src('./*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCss()))
        .pipe(gulp.dest('dist'));
   	cb();
};

exports.build = gulp.series(clean, ref, copy_img, copy_fonts) //command: gulp build

exports.style = style;
exports.start = watch; //command: gulp start
exports.ref = ref;
exports.clean = clean;
exports.copy_fonts = copy_fonts;
exports.copy_styles = copy_styles;
exports.copy_scripts= copy_scripts;
exports.copy_html = copy_html;
exports.build_2 = gulp.series(clean, copy_fonts, copy_img, copy_scripts, copy_styles, copy_html);  // not perfect








