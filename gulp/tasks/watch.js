var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();
var reload = browserSync.reload();
gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "resources"
		}
	});
	watch('*.html').on("change", reload);
	});
