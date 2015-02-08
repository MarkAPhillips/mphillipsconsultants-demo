(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);

    userController.$inject = ['$scope', '$log', 'userFactory'];

    function userController($scope, $log, userFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.loaded = false;

        /* Delete user from view */
        vm.delete = function(index) {
            alert('Delete ' + index);
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