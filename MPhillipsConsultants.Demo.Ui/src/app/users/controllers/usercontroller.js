(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);
      

    userController.$inject = ['$scope', '$log', '$rootScope','userFactory', 'queryBuilderFactory', 'external'];

    function userController($scope, $log, $rootScope, userFactory, queryBuilderFactory, external) {
        /* jshint validthis:true */
        var vm = this;

        /* Set default properties */
        vm.loaded = false;
        vm.currentPage = 1;

        /* Define events */
        vm.search = search;
        vm.changePage = changePage;
        vm.delete = deleteUser;
        vm.orderBy = orderBy;
        vm.message = $rootScope.message;

        /* Set default values  */
        vm.maxSize = queryBuilderFactory.maxSize;
        vm.pageSize = queryBuilderFactory.pageSize;

        loadUsers(true);

        /* Load user data */
        function loadUsers(emit, orderByField) {
            if (emit) {
                $scope.$emit('load');
            }
            var searchText = vm.searchText;
            var actions = queryBuilderFactory.actions(vm.currentPage, searchText, orderByField);
            var factory = userFactory.users();
            var resourceMethod;
            if (searchText) {
                resourceMethod = factory.search(actions);
            } else {
                resourceMethod = factory.get(actions);
            }

            resourceMethod.$promise.then(function(data) {
                vm.users = data.value;
                vm.totalItems = data['@odata.count'];
                vm.loaded = true;
            }, function(error) {
                $log.error(error);
            }).finally(function () {
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

        /* Order by event */

        function orderBy(field) {
            loadUsers(false, field);
        }

        /* Delete user from view */

        function deleteUser(index) {
            if (confirm('Click OK to delete the user')) {
                userFactory.users().delete({ key: index }).$promise.then(function(user) {
                    vm.users = external.underscore().reject(vm.users, function(item) { return item.Id === index; });
                    vm.message = 'User ' + user.FirstName + ' ' + user.LastName + ' successfully deleted.';
                });
            }
        }
    }
})();