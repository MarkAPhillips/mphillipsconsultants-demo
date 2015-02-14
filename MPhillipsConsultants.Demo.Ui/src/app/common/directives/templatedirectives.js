(function() {
    'use strict';

    angular
        .module('MPhillipsConsultants.Demo.App.Common')
        .directive('mpHeaderTemplate', headerTemplate)
        .directive('mpFooterTemplate', footerTemplate);

    function headerTemplate() {
        var directive = { templateUrl: '/src/app/common/views/header.tmpl.html', restrict: 'EA' };
        return directive;
    }

    function footerTemplate() {
        var directive = { templateUrl: '/src/app/common/views/footer.tmpl.html', restrict: 'EA' };
        return directive;
    }

})();