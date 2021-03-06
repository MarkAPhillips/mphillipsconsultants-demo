﻿(function () {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$resource', 'apiUri'];

    function userFactory($resource, apiUri) {
        var service = {
            users: users
        };

        return service;

        function users() {
            var oDataUrl = apiUri + '/users';

            ///* Web API Resources on Users using oData conventions */
            var actions = {
                'get': { method: 'GET', params: { '$count': true }, url: oDataUrl },
                'search': { method: 'GET', params: { 'cmd': '@filterCommand','$count': true }, url: oDataUrl + '?$filter=:cmd' },
                'save': { method: 'POST', url: oDataUrl },
                'update': { method: 'PUT', params: { key: '@key' }, url: oDataUrl + '(:key)' },
                'delete': { method: 'DELETE', params: { key: '@key' }, url: oDataUrl + '(:key)' },
                'getUser': { method: 'GET', params: { key:'@key' }, url: oDataUrl + '(:key)' },
            };
            return $resource('', null, actions);
        }
    }
})();