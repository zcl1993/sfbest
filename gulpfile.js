var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require("gulp-cssnano");

gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss').pipe(sass({outputStyle: 'expanded'})).pipe(rename({"suffix" : ".min"})).pipe(gulp.dest('./src/css'));
})
//.pipe(cssnano())
gulp.task('default',function(){
	gulp.watch(['./src/sass/*.scss'],['sass']);
})

