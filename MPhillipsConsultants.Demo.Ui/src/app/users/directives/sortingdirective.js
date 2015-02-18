(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.User')
        .directive('sortingDirective', sortingDirective);

    sortingDirective.$inject = [];
    
    function sortingDirective () {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            /* Todo 
            1: Pass in field as an attribute
            2: Review how to pass ng-click event to parent scope
            3: Change icon on click - if default property then is sorted asc - check
            */

            //<a href="#" id="link-firstname" ng-click="user.orderBy('FirstName')" title="Sort by First Name">First Name
            //                     <span class="glyphicon" aria-hidden="true"></span>
            
            //if (vm.sortingOrder === field) {
            //    vm.reverse = !vm.reverse;
            //}
            //vm.sortingOrder = field;
            //// icon setup
            //$('th i').each(function () {
            //    // icon reset
            //    $(this).removeClass().addClass('icon-sort');
            //});
            //if (vm.reverse) {
            //    $('th.' + field + ' i').removeClass().addClass('icon-chevron-up');
            //} else {
            //    $('th.' + field + ' i').removeClass().addClass('icon-chevron-down');
            //}
        }
    }

})();