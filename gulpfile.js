var gulp = require('gulp');
var	concat = require('gulp-concat-css');
var	concatCssMin = require('gulp-cssmin');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
const jpegtran = require('imagemin-jpegtran');
	
	
gulp.task('cssConcat', function (){
	return gulp.src('./public/css/*.css')
		.pipe(concat('all.css'))
		.pipe(gulp.dest('./public/build/'));
}); 

gulp.task('cssConcatMin', function (){
	return gulp.src('./public/css/*.css')
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('./public/build/'));
});

gulp.task('jade', function(){
  gulp.src('./public/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
});

gulp.task('image', function () {
    return gulp.src('public/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [jpegtran()]
        }))
        .pipe(gulp.dest('public/images/'));
});

gulp.task('js', function () {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('webserver',function(){
	gulp.src('./')
		.pipe(webserver());
});

gulp.task('watch', function() {
    gulp.watch("./public/css/*.css", ['cssConcatMin']);
	gulp.watch("./public/jade/*.jade", ['jade']);
});

gulp.task('default', ['cssConcatMin', 'image', 'jade', 'js', 'webserver']);

