var gulp = require('gulp') ,
	browserify = require('browserify') ,
	reactify = require('reactify') ,
	source = require('vinyl-source-stream'),
	babelify = require('babelify') ;


gulp.task('jsx', function(){
	browserify('./js/app.js')
		.transform(babelify,{
			presets: ['es2015', 'react']
		})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./js')) ;
}) ;

gulp.task('watch', function(){
	gulp.watch('./js/app.js', ['jsx']) ;
	gulp.watch('./js/components/*.jsx', ['jsx']) ;
	gulp.watch('./js/redux/*.js', ['jsx']) ;
}) ;

gulp.task('default', ['watch', 'jsx']) ;
