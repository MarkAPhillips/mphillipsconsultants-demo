(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.Common')
        .factory('flashFactory', flashFactory);

    flashFactory.$inject = ['$rootScope'];

    function flashFactory($rootScope) {

        var queue = [];
        var currentMessage;

        $rootScope.$on("$routeChangeSuccess", function() {
            currentMessage = queue.shift() || '';
        });

        var service = {
            getMessage: getMessage,
            setMessage: setMessage
        };
        return service;

        function getMessage() {
            return currentMessage;
        }

        function setMessage(message) {
            queue.push(message);
        }        
        
       
    }
})();