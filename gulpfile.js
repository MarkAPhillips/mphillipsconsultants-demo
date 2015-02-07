(function() {
    var gulp = require('gulp'),
        less = require('gulp-less'),
        jshint = require('gulp-jshint'),
        plumber = require('gulp-plumber'),
        ngconstant = require('gulp-ng-constant'),
        notify = require("gulp-notify");

    var config = {
        basePath: 'MPhillipsConsultants.Demo.Ui/src'
    };

    var onError = function(err) {
        console.log(err);
    };

    /* Debug Task - Runs lint,compiles less to css and generates angularjs constants */
    gulp.task('DEBUG', ['lint', 'less','constant']);

    gulp.task('lint', function() {
        return gulp.src(config.basePath + '/**/*.js')
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(notify({ onLast:true, message:'Js files linted.'}));
    });

    gulp.task('less', function() {
        gulp.src(config.basePath + '/less/theme.less')
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(less())
            .pipe(gulp.dest(config.basePath + '/assets/css'))
            .pipe(notify('Less file <%=file.relative%> compiled to CSS.'));
    });

    gulp.task('constant', function () {
        var configuration = require('./config.json');
        // Todo: Need to pass in env variable
        var envConfig = configuration['DEBUG'];
        return ngconstant({
            dest: 'app-constants.js',
            name: 'MPhillipsConsultants.Demo.App.Constants',
            constants: envConfig,
            wrap: '(function(){\'use strict\';\n\n<%= __ngModule %>})();',
            stream: true
        })
        .pipe(gulp.dest(config.basePath + '/'))
        .pipe(notify('Constant file <%=file.relative%> created.'));
    });
    
    /* Watch changes in Js and Less files */
    gulp.task('watch', function() {
        gulp.watch(config.basePath + '/less/**/*.less', ['less']);
        gulp.watch(config.basePath + '/**/*.js', ['lint']);
    });

})();