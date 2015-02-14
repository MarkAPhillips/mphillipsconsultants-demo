(function () {
    'use strict';
    angular.module('MPhillipsConsultants.Demo.App.Common')
        .directive('mpLoadingIcon', loadingIconDirective);

    loadingIconDirective.$inject = ['assetPath'];

    function loadingIconDirective(assetPath) {
        var directive = {
            link: link,
            template: "<div><img src='" + assetPath + "images/ajax-loader.gif' alt='Loading...' width='24' height='24'></div>",
            restrict: 'EA'
        };
        return directive;

        function link(scope, element) {
            scope.$on('load', function() {
                element.css({ 'display': "" });
            });
            scope.$on('unload', function() {
                element.css({ 'display': "none" });
            });
        }
    }
})();