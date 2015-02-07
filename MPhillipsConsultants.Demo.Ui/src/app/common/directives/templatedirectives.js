(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.Common')
        .directive('mpHeaderTemplate', headerTemplate);
    
    function headerTemplate () {
        var directive = { templateUrl: '/src/app/common/views/header.tmpl.html',restrict: 'EA'};
        return directive;
    }
})();