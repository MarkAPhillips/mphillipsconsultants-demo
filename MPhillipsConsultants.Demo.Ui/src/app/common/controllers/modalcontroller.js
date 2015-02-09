(function () {
    'use strict';

    angular.module('MPhillipsConsultants.Demo.App.Common')
        .controller('ModalController', modalController);

    modalController.$inject = ['$modalInstance'];

    function modalController($modalInstance) {
        /*jshint validthis:true */
        var vm = this;
        vm.close = closeModal;

        // Close modal
        function closeModal() {
            $modalInstance.close();
        }
    }

})();