var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss');
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');


gulp.task("default", function() {
	console.log("Hooray -- You just created a gulp task!");
});

gulp.task("html", function() {
	console.log("Imagine -- You created a useful gulp task!");
});

gulp.task("styles", function() {
	//console.log("Imagine -- SCSS, postCSS running here!");
	return gulp.src('./app/assets/styles/style.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task("watch", function() {
	watch('./app/index.html', function() {
			gulp.start('html');
	});

	watch('./app/assets/styles/**/style.css', function() {
			gulp.start('styles');
	});
});



