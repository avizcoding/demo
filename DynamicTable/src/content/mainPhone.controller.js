var MainPhone;
(function (MainPhone) {
    var MainController = (function () {
        function MainController() {
        }
        MainController.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
        };
        MainController.prototype.onAfterRendering = function () {
        };
        MainController.prototype.setModel = function (model) {
            if (this._model == null) {
                this._model = new sap.ui.model.json.JSONModel();
            }
            this._model.setData(model);
            this.setDataStructure();
        };
        MainController.prototype.getModel = function () {
            return this._model;
        };
        MainController.prototype.setDataStructure = function () {
            var data = this._model.getProperty("/data");
            this._model.setProperty("/dataStructures", {});
            for (var i = 0; i < data.length; i++) {
                var section = data[i].section;
                var fields = [];
                for (var prop in data[0]) {
                    fields.push({ field: prop });
                }
                this._model.setProperty("/dataStructures", fields);
            }
        };
        return MainController;
    })();
    MainPhone.MainController = MainController;
})(MainPhone || (MainPhone = {}));
sap.ui.controller("src.content.mainPhone", new MainPhone.MainController());
//# sourceMappingURL=mainPhone.controller.js.map