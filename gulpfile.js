
var gulp = require('gulp');
var less = require('gulp-less');
var browsersync= require('browser-sync').create();
var reload = browsersync.reload;
var sourcemaps = require('gulp-sourcemaps');


gulp.task('start',['less'],function() {
	browsersync.init({
		server:{baseDir:'./'},
		startPath:'src/html/aindex.html'
	})

	gulp.watch('src/aless/*.less',['less'])
	gulp.watch('src/html/*.html').on('change',reload)
	gulp.watch('src/js/*.js').on('change',reload)
	gulp.watch('src/img/*').on('change',reload)
})

gulp.task('less',function(){
	gulp.src('src/main.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.on('error',function(err){
            console.log(err.message);
        })
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('src/css'))
	.pipe(reload({stream:true}))
})
