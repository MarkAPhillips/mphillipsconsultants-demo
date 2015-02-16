﻿(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);

    userController.$inject = ['$scope', '$log', '$rootScope', 'userFactory', '_', 'paging'];

    function userController($scope, $log, $rootScope, userFactory, _, paging) {
        /* jshint validthis:true */
        var vm = this;
        vm.loaded = false;
        vm.search = search;
        vm.changePage = changePage;
        vm.currentPage = 1;
        vm.maxSize = paging.maxSize;
        vm.pageSize = paging.defaultPageSize;

        loadUsers(true);

        /* Load user data */
        function loadUsers(emit) {
            if (emit) {
                $scope.$emit('load');
            }
            var searchText = vm.searchText;

            var actions = {
                skip: recordsToSkip(),
                top: vm.pageSize
            };
            
            var factory = userFactory.users();
            var resourceMethod;
            if (searchText) {
                var filterCommand = 'contains(FirstName, \'' + searchText + '\') or ' + 'contains(LastName, \'' + searchText + '\')';
                actions.cmd = filterCommand;
                resourceMethod = factory.search(actions);
            } else {
                resourceMethod = factory.get(actions);
            }
          
            resourceMethod.$promise.then(function (data) {
                vm.users = data.value;
                vm.totalItems = data['@odata.count'];
                vm.loaded = true;
            }, function(error) {
                $log.error(error);
            }).finally(function() {
                if (emit) {
                    $scope.$emit('unload');
                }
            });
        }

        /* Search event */
        function search() {
            vm.currentPage = 1;
            loadUsers(false);
        }

        /* Change Page event */
        function changePage() {
            loadUsers(false);
        }
        
        /* Determine no of records to skip */
        function recordsToSkip() {
            var skip = 0;
            if (vm.currentPage >= 1) {
                var page = vm.currentPage;
                skip = --page * vm.pageSize;
            }
            return skip;
        }

        /* Delete user from view */
        vm.delete = function(index) {
            if (confirm('Click OK to delete the user')) {
                userFactory.users().delete({ key: index }).$promise.then(function(user) {
                    vm.users = _.reject(vm.users, function(item) { return item.Id === index; });
                    $rootScope.message = 'User ' + user.FirstName + ' ' + user.LastName + ' successfully deleted.';
                });
            }
        };
    }
})();