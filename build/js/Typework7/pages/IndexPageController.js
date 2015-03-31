/// <reference path="../../angular/angular.d.ts"/>
/// <reference path="PageController.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Typework7;
(function (Typework7) {
    var pages;
    (function (pages) {
        var IndexPageController = (function (_super) {
            __extends(IndexPageController, _super);
            function IndexPageController($scope) {
                _super.call(this, $scope);
                this.model = { title: 'Click me to test Angular data binding' };
                $scope.message = this.model;
            }
            IndexPageController.prototype.onClick = function () {
                this.model.title = "Data binding works :-)";
            };
            return IndexPageController;
        })(pages.PageController);
        pages.IndexPageController = IndexPageController;
    })(pages = Typework7.pages || (Typework7.pages = {}));
})(Typework7 || (Typework7 = {}));
