var gulp = require('gulp');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	    .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(errorMsg) {
            console.log(errorMsg.toString());
            this.emit('end');
        })
	    .pipe(gulp.dest('./app/temp/styles'));
});