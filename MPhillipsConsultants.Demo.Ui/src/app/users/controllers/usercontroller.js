(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);

    userController.$inject = ['$scope','userFactory'];

    function userController($scope,userFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.loaded = false;
        activate();
        function activate() {
            $scope.$emit('load');
            userFactory.userResource().get().$promise.then(function (data) {
                vm.users = data.value;
                vm.loaded = true;
                $scope.$emit('unload');
            });
        }
    }
})();