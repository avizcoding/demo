/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
jQuery.sap.require("demo.src.infrastructure.Context.Context");
var sap;
var Bootstrapper = (function () {
    function Bootstrapper() {
    }
    Bootstrapper.init = function () {
        sap.ui.localResources("src");
        sap.ui.getCore().attachInitEvent(function () {
            infrastructure.Context.Initialize();
            var view = sap.ui.view("mainView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.main", height: "100%" });
            view.placeAt("content");
        });
        sap.ui.getCore().boot();
    };
    return Bootstrapper;
})();
Bootstrapper.init();
//# sourceMappingURL=bootstrapper.js.map