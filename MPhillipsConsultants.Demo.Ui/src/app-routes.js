(function() {
    'use strict';
    angular
        .module('MPhillipsConsultants.Demo.App')
        .config(routes);

    function routes($routeProvider, $locationProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: '/src/app/users/views/users.html',
                controller: 'userController',
                controllerAs: 'user'
            }).
             when('/users/manage', {
                 templateUrl: '/src/app/users/views/form.html',
                 controller: 'formController',
                 controllerAs: 'form'
             }).
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