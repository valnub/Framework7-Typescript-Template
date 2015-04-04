/// <reference path="AngularApp.ts" />
/// <reference path="pages/IndexPageController.ts" />
var Typework7;
(function (Typework7) {
    var Init = (function () {
        function Init() {
            this.configApp();
        }
        Init.prototype.configApp = function () {
            // Initialize your app
            this.fw7App = new Framework7({
                animateNavBackIcon: true
            });
            this.fw7ViewOptions = {
                // Because we use fixed-through navbar we can enable dynamic navbar
                dynamicNavbar: true,
                domCache: true
            };
            // Add view
            this.mainView = this.fw7App.addView('.view-main', this.fw7ViewOptions);
            // Init Angular
            this.angularApp = new Typework7.AngularApp('Typework7', []);
            // Init controllers
            this.angularApp.addController('IndexPageController', Typework7.pages.IndexPageController);
        };
        return Init;
    })();
    Typework7.Init = Init;
    // Everything starts here
    new Init();
})(Typework7 || (Typework7 = {}));
