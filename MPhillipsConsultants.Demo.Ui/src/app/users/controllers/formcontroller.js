(function () {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('formController', formController);

    formController.$inject = ['$log','$location', 'userFactory','flashFactory'];
    
    function formController($log, $location, userFactory, flashFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.submit = submit;
       
        function submit() {
            var User = {
                "FirstName": vm.FirstName,
                "LastName": vm.LastName,
                "Email": vm.Email,
                "Country": vm.Country,
                "IpAddress" : vm.IpAddress
            };
            userFactory.users().save(User).$promise.then(function () {
                flashFactory.setMessage('User ' + User.FirstName + ' ' + User.LastName + ' successfully added.');
                $location.path('/users');
            }, function (error) {
                $log.error(error);
            });
        }
    }
})();
