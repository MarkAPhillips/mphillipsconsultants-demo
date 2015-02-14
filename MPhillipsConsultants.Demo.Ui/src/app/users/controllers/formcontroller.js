(function () {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .controller('formController', formController);

    formController.$inject = ['$log','$location','$rootScope','$routeParams','userFactory'];
    
    function formController($log, $location, $rootScope, $routeParams, userFactory) {
        /* Todo refactor this to make more DRY */

        /* jshint validthis:true */
        var vm = this;
        var id = $routeParams.id;
        if (typeof id == 'undefined') {
            vm.heading = 'Add';
        } else {
            vm.heading = 'Update';
            populateFormFields();
        }
        
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

            var userMessage = 'User ' + user.FirstName + ' ' + user.LastName + ' successfully ';
            if (typeof id == 'undefined') {
                userFactory.users().save(user).$promise.then(function() {
                    $rootScope.message = userMessage + 'added.';
                    $location.path('/users');
                }, function(error) {
                    $log.error(error);
                });
            } else {
                userFactory.users().update({key: id},user).$promise.then(function () {
                    $rootScope.message = userMessage + 'updated.';
                    $location.path('/users');
                }, function (error) {
                    $log.error(error);
                });
            }
        }
        
        /* Populate form fields */
        function populateFormFields() {
            userFactory.users().getUser({ key: id }).$promise.then(function (user) {
                vm.FirstName = user.FirstName;
                vm.LastName = user.LastName;
                vm.Email = user.Email;
                vm.Country = user.Country;
                vm.IpAddress = user.IpAddress;
            });
        }
    }
})();
