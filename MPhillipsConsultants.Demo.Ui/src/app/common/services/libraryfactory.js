(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.Common')
        .factory('external', libraryFactory);

    libraryFactory.$inject = ['$window'];

    function libraryFactory($window) {
        var service =
        {
            underscore: underscore,
            tweenMax: tweenMax
        };

        return service;

        function underscore() {
            return $window._;
        }

        function tweenMax() {
            return $window.TweenMax;
        }
    }
})();