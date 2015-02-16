(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);

    userController.$inject = ['$scope', '$log', '$rootScope', 'userFactory', '_'];

    function userController($scope, $log, $rootScope, userFactory, _) {
        /* jshint validthis:true */
        var vm = this;
        vm.loaded = false;
        vm.search = search;
        vm.currentPage = 1;
        vm.maxSize = 4;
        vm.pageSize = 10;

        loadUsers(true);

        /* Load user data */

        function loadUsers(emit) {
            if (emit) {
                $scope.$emit('load');
            }
            userFactory.users().get({ skip: recordsToSkip(), top: vm.pageSize }).$promise.then(function(data) {
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

        /* Search users */

        function search() {
            vm.currentPage = 1;
            $rootScope.message = null;
            vm.loaded = false;
            var searchText = vm.searchText;
            var filterCommand = 'contains(FirstName, \'' + searchText + '\') or ' +
                'contains(LastName, \'' + searchText + '\')';

            userFactory.users().search({ cmd: filterCommand, skip: recordsToSkip(), top: vm.pageSize }).$promise.then(function(data) {
                vm.users = data.value;
                vm.totalItems = data['@odata.count'];
                vm.loaded = true;
            }, function(error) {
                $log.error(error);
            });
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

        /* Navigate pages */
        vm.changePage = function() {
            loadUsers(false);
        };

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