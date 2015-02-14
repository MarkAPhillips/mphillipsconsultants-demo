(function() {
    'use strict';
    angular
        .module('MPhillipsConsultants.Demo.App')
        .config(routes);

    function routes($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                 templateUrl: '/src/app/common/views/home.html'
             }).
            otherwise({
                redirectTo: '/'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
    }
})();