(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('userController', userController);

    userController.$inject = ['$log','userFactory'];

    function userController($log,userFactory) {
        /* jshint validthis:true */
        var vm = this;
        activate();
        function activate() {
            userFactory.userResource().get().$promise.then(function (data) {
                $log.log(data);
                vm.users = data.value;
            });
        }
    }
})();