jQuery.sap.require("demo.src.infrastructure.Services.Mock.MockDataService");
var MainPhone;
(function (MainPhone) {
    var MainView = (function () {
        function MainView() {
            this._dataLoader = infrastructure.Context.DataLoader;
        }
        MainView.prototype.getControllerName = function () {
            return "src.content.mainPhone";
        };
        MainView.prototype.createContent = function (controller) {
            var _this = this;
            var that = this;
            this._controller = controller;
            this._layout = new sap.ui.commons.layout.VerticalLayout();
            this._controller.init();
            var receivedData = (function (data) {
                _this._controller.setModel(data);
                that.buildScreen();
            });
            this.getData(receivedData);
            return this._layout;
        };
        MainView.prototype.getData = function (callback) {
            var that = this;
            var dataReceived = (function (response) {
                callback(response);
            });
            this._dataLoader.Run(new services.MockDataService(), "", dataReceived);
        };
        MainView.prototype.buildScreen = function () {
            var dataTable = new sap.m.List("dataTable");
            this._layout.addContent(dataTable);
            this.setControlsModel();
        };
        MainView.prototype.setControlsModel = function () {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var dataTable = this._layout.getContent()[0];
            this.buildTable(dataTable);
        };
        MainView.prototype.buildTable = function (table) {
            var dataStructure = this._controller.getModel().getProperty("/dataStructures");
            /* Bindings */
            table.bindItems("/data", function (sId, documentDataModel) {
                var documentItem = new sap.m.ObjectListItem(sId, {
                    title: "{" + dataStructure[0].field + "}",
                    type: "Navigation",
                    attributes: [
                        new sap.m.ObjectAttribute("MAKTX" + sId, { text: "{" + dataStructure[1].field + "}", })
                    ]
                });
                return documentItem;
            });
        };
        return MainView;
    })();
    MainPhone.MainView = MainView;
})(MainPhone || (MainPhone = {}));
sap.ui.jsview("src.content.mainPhone", new MainPhone.MainView());
//# sourceMappingURL=mainPhone.view.js.map