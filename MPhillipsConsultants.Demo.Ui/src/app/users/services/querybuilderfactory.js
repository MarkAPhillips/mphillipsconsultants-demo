(function () {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .factory('queryBuilderFactory', queryBuilderFactory);

    queryBuilderFactory.$inject = ['paging'];

    function queryBuilderFactory(paging) {
        var service = {
            actions: getActions,
            pageSize: paging.defaultPageSize,
            maxSize: paging.maxSize
        };
        return service;
       
        /* Set actions to pass into a query */
        function getActions(currentPage,searchText) {
            var actions = {
                skip: recordsToSkip(currentPage),
                top: service.pageSize
            };
            
            if (searchText) {
                var filterCommand = 'contains(FirstName, \'' + searchText + '\') or ' + 'contains(LastName, \'' + searchText + '\')';
                actions.cmd = filterCommand;
            }
            return actions;
        }
        
        /* Determine no of records to skip */
        function recordsToSkip(currentPage) {
            var skip = 0;
            if (currentPage >= 1) {
                var page = currentPage;
                skip = --page * service.pageSize;
            }
            return skip;
        }
    }
})();