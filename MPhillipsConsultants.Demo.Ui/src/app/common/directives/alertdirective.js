(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.Common')
        .directive('mpAlert', alertDirective);

    alertDirective.$inject = ['$timeout'];
    
    function alertDirective($timeout) {
        var directive = {
            link: link,
            restrict: 'EA',
            template: '<div class="alert alert-success animated fadeOut" ng-if="message"><span class="glyphicon glyphicon-ok"></span>&nbsp;{{message}}</div>',
            scope: {
                message: '@'
            }
        };
        return directive;

        function link(scope, element) {
            $timeout(function () {
                element.remove();
            }, 4000);

        }
    }

})();