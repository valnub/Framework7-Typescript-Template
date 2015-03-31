/// <reference path="../../angular/angular.d.ts"/>
var Typework7;
(function (Typework7) {
    var pages;
    (function (pages) {
        /**
         * Do not instantiate this. This is just an abstract class.
         * If you'd like to create a new PageController extend this class.
         *
         * @class
         * @abstract
         */
        var PageController = (function () {
            function PageController($scope) {
                this.scope = $scope;
                this.scope.events = this;
            }
            return PageController;
        })();
        pages.PageController = PageController;
    })(pages = Typework7.pages || (Typework7.pages = {}));
})(Typework7 || (Typework7 = {}));
