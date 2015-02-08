(function () {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('formController', formController);

    formController.$inject = ['$log','$location','$rootScope','userFactory'];
    
    function formController($log, $location, $rootScope, userFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.submit = submit;
        vm.cancel = cancel;
        
        /* Cancel input and return to user view */
        function cancel() {
            $location.path('/users');
        }
       
        /* Submit user form data */
        function submit() {
            var user = {
                "FirstName": vm.FirstName,
                "LastName": vm.LastName,
                "Email": vm.Email,
                "Country": vm.Country,
                "IpAddress" : vm.IpAddress
            };
            userFactory.users().save(user).$promise.then(function () {
                $rootScope.message= 'User ' + user.FirstName + ' ' + user.LastName + ' successfully added.';
                $location.path('/users');
            }, function (error) {
                $log.error(error);
            });
        }
    }
})();
