/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
jQuery.sap.require("demo.src.infrastructure.Context.Context");
var sap: any;
class Bootstrapper {

    public static init() {
        sap.ui.localResources("src");

        sap.ui.getCore().attachInitEvent(() => {
            infrastructure.Context.Initialize();

            /* Query params */
            var queryString: string = location.search.substring(1);
            var queryParams = queryString.split("&");
            var params = {};

            for (var i = 0; i < queryParams.length; i++) {
                var chain = queryParams[i];
                var variable = chain.split("=")[0];
                var value = chain.split("=")[1];

                if (variable != null)
                    params[variable.toUpperCase()] = value;
            }

            if (params["DEVICE"] == null || params["DEVICE"] == "") {
                for (var prop in sap.ui.Device.system) {
                    if (sap.ui.Device.system[prop] == true) {
                        console.log("Device: " + prop);
                        params["DEVICE"] = prop;
                    }
                }
            }

            /* Load view */
            var view: any;
            if (params["DEVICE"] == sap.ui.Device.system.SYSTEMTYPE.DESKTOP) {
                view = sap.ui.view("mainView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.mainDesktop", height: "100%" });
            } else if (params["DEVICE"] == sap.ui.Device.system.SYSTEMTYPE.TABLET) {
                view = sap.ui.view("mainView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.mainTablet", height: "100%" });
            } else if (params["DEVICE"] == sap.ui.Device.system.SYSTEMTYPE.PHONE) {
                view = sap.ui.view("mainView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.mainPhone", height: "100%" });
            }
            view.placeAt("content");
        });

        sap.ui.getCore().boot();
    }

}

Bootstrapper.init();