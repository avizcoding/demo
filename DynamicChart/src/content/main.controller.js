var Main;
(function (Main) {
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
        };
        return MainController;
    })();
    Main.MainController = MainController;
})(Main || (Main = {}));
sap.ui.controller("src.content.main", new Main.MainController());
//# sourceMappingURL=main.controller.js.map