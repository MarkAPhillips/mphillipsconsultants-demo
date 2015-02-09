(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);

    userController.$inject = ['$scope', '$log', '$rootScope','userFactory','_'];

    function userController($scope, $log, $rootScope, userFactory, _) {
        /* jshint validthis:true */
        var vm = this;
        vm.loaded = false;

        /* Delete user from view */
        vm.delete = function (index) {
            if (confirm('Click OK to delete the user')) {
                userFactory.users().delete({ key: index }).$promise.then(function(user) {
                    vm.users = _.reject(vm.users, function(item) { return item.Id === index; });
                    $rootScope.message = 'User ' + user.FirstName + ' ' + user.LastName + ' successfully deleted.';
                });
            }
        };
        
        activate();
        
        function activate() {
            $scope.$emit('load');
            userFactory.users().get().$promise.then(function(data) {
                vm.users = data.value;
                vm.loaded = true;
            }, function(error) {
                $log.error(error);
            }).finally(function() {
                $scope.$emit('unload');
            });
        }
    }
})();