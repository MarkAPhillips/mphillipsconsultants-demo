(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);

    userController.$inject = ['$scope', '$log', 'userFactory','flashFactory'];

    function userController($scope, $log, userFactory, flashFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.loaded = false;
        vm.flash = flashFactory;

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