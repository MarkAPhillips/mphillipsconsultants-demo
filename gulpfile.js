(function () {
    'use strict';
    var gulp = require('gulp'),
        less = require('gulp-less'),
        jshint = require('gulp-jshint'),
        plumber = require('gulp-plumber'),
        ngconstant = require('gulp-ng-constant'),
        notify = require("gulp-notify"),
        karma = require('gulp-karma');

    var basePath = 'MPhillipsConsultants.Demo.Ui';
    var config = {
        srcPath: basePath + '/src',
        testPath : basePath + '/tests'
    };

    var onError = function(err) {
        console.log(err);
    };

    /* Debug Task - Runs lint, unit tests, compiles less to css and generates angularjs constants */
    gulp.task('DEBUG', ['lint', 'less','constant']);

    gulp.task('lint', function() {
        return gulp.src(config.srcPath + '/**/*.js')
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(notify({ onLast:true, message:'Js files linted.'}));
    });


    var testFiles = [config.srcPath + 'app/common/tests/*spec.js', config.srcPath + 'app/users/tests/*spec.js'];
   
    gulp.task('karma', function () {
        gulp.src(testFiles)
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(karma({
                configFile: config.testPath + '/karma.conf.js',
                action: 'run'
            }));

    });

    gulp.task('less', function() {
        gulp.src(config.srcPath + '/less/theme.less')
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(less())
            .pipe(gulp.dest(config.srcPath + '/assets/css'))
            .pipe(notify('CSS file <%=file.relative%> successfully created.'));
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
        .pipe(gulp.dest(config.srcPath + '/'))
        .pipe(notify('Constant file <%=file.relative%> created.'));
    });
    
    /* Watch changes in Js and Less files */
    gulp.task('watch', function() {
        gulp.watch(config.srcPath + '/less/**/*.less', ['less']);
        gulp.watch(config.srcPath + '/**/*.js', ['lint']);
    });

})();