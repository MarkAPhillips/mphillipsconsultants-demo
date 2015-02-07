(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$resource', 'apiUri'];

    function userFactory($resource, apiUri) {
        var service = {
            userResource: userResource
        };

        return service;

        function userResource() {
            return $resource(apiUri + '/users');
        }
    }
})();