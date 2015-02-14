(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.Common')
        .factory('_', underscoreFactory);

    underscoreFactory.$inject = ['$window'];

    function underscoreFactory($window) {
        return $window._;
    }
})();