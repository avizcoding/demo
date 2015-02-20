jQuery.sap.require("demo.src.infrastructure.Services.Mock.MockDataService");
var Main;
(function (Main) {
    var MainView = (function () {
        function MainView() {
            this._dataLoader = infrastructure.Context.DataLoader;
        }
        MainView.prototype.getControllerName = function () {
            return "src.content.main";
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
            this.getActor(receivedData);
            return this._layout;
        };
        MainView.prototype.getActor = function (callback) {
            var that = this;
            var dataReceived = (function (response) {
                callback(response);
            });
            this._dataLoader.Run(new services.MockDataService(), "", dataReceived);
        };
        MainView.prototype.buildScreen = function () {
            var dataTable = new sap.m.Table("dataTable");
            this._layout.addContent(dataTable);
            this.setControlsModel();
        };
        MainView.prototype.setControlsModel = function () {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var dataTable = this._layout.getContent()[0];
            this.buildTable(model, dataTable);
        };
        MainView.prototype.buildTable = function (model, table) {
            var data = model.getProperty("/data");
            /* Bindings */
            table.bindAggregation("columns", "/dataStructures", function (sId, dataModel) {
                var columnId = dataModel.getObject().field;
                return new sap.m.Column({
                    header: new sap.m.Text({ text: columnId })
                });
            });
            table.bindItems("/data", function (index, context) {
                var obj = context.getObject();
                var row = new sap.m.ColumnListItem();
                for (var k in obj) {
                    row.addCell(new sap.m.Text({ text: obj[k] }));
                }
                return row;
            });
        };
        return MainView;
    })();
    Main.MainView = MainView;
})(Main || (Main = {}));
sap.ui.jsview("src.content.main", new Main.MainView());
//# sourceMappingURL=main.view.js.map