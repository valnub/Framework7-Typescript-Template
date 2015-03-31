/// <reference path="../angular/angular.d.ts"/>
var Typework7;
(function (Typework7) {
    var AngularApp = (function () {
        function AngularApp(name, modules) {
            this.app = angular.module(name, modules);
        }
        AngularApp.prototype.addController = function (name, controller) {
            this.app.controller(name, controller);
        };
        return AngularApp;
    })();
    Typework7.AngularApp = AngularApp;
})(Typework7 || (Typework7 = {}));
