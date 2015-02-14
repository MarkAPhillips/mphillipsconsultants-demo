(function () {
    'use strict';
    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: '/src/app/users/views/users.html',
                controller: 'userController',
                controllerAs: 'user'
            }).
            when('/users/manage/:id?', {
                templateUrl: '/src/app/users/views/form.html',
                controller: 'formController',
                controllerAs: 'form'
            });
    }
})();