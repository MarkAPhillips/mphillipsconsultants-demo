
(function() {

    'use strict';

    describe('Given a library factory', function() {

        var libraryFactory, $window;
        
        beforeEach(function() {
            module('MPhillipsConsultants.Demo.App.Common');

            inject(function(_libraryFactory_, _$window_) {
                libraryFactory = _libraryFactory_;
                $window = _$window_;
            });}
        );

        it('Then should verify _ is returned when calling underscore', function() {

        });

    });
})();