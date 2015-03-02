// Karma Unit Test configuration

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
          '../vendor/angular/angular.js',
          '../vendor/angular-resource/angular-ui-router.js',
          '../vendor/angular-bootstrap/ui-bootstrap-tpls.js',
          '../vendor/angular-route/angular-route.js',
          '../vendor/angular-mocks/*.js',
          '../../src/app-constants.js',
          '../../src/app.js',
          '../../src/app-routes.js',
          '../../src/app-run.js',
          '../../src/app/**/*.js'
        ],


        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: [],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS', 'Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        //load the needed plugins (according to karma docs, this should not be needed tho)
        plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher',
          'karma-chrome-launcher',
          'karma-spec-reporter'
        ]
    });
};