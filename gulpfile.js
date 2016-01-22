var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var opn = require('opn');

var server = {
	host: 'localhost',
	port: '8001'
}

gulp.task('styles', function(){
	gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./styles/'));
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(webserver({
			host: server.host,
			port: server.port,
			livereload: true,
			directoryListing: false
		}));
});

gulp.task('openbrowser', function() {
	opn('http://' + server.host + ':' + server.port);
});

gulp.task('watch', function(){
  gulp.watch('styles/*.scss',['styles']);
  gulp.watch('index.html',['styles']);
});

gulp.task('default', ['webserver','watch','openbrowser']);