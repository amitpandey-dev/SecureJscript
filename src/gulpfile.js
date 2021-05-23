/// <binding BeforeBuild='js-uglify' />
var gulp = require('gulp'),
    uglify = require("gulp-uglify"), 
    ngAnnotate = require("gulp-ng-annotate"), 
    obfuscator = require('gulp-javascript-obfuscator');
 
gulp.task('js-uglify', async function(){

    gulp.src("ngscripts/*.js").pipe(ngAnnotate({ add: true })).pipe(uglify()).pipe(obfuscator())
        .pipe(gulp.dest("Scripts")); 
 
});