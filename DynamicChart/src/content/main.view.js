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
            var dataChart = new sap.makit.Chart("dataChart", {
                height: "40rem",
                type: sap.makit.ChartType.Line,
                showRangeSelector: false,
                showTableView: false,
                showTotalValue: false,
                lineThickness: 2,
                categoryAxis: new sap.makit.CategoryAxis({ displayLastLabel: true }),
                category: new sap.makit.Category({ column: "episode" }),
                values: [new sap.makit.Value({ expression: "rating", format: "number" })]
            });
            dataChart.setModel(this._controller.getModel());
            this._layout.addContent(dataChart);
            this.setControlsModel();
        };
        MainView.prototype.setControlsModel = function () {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var dataChart = this._layout.getContent()[0];
            this.buildTable(dataChart);
        };
        MainView.prototype.buildTable = function (chart) {
            chart.addColumn(new sap.makit.Column({ name: "episode", value: "{episode}" }));
            chart.addColumn(new sap.makit.Column({ name: "rating", value: "{rating}" }));
            chart.bindRows("/data");
        };
        return MainView;
    })();
    Main.MainView = MainView;
})(Main || (Main = {}));
sap.ui.jsview("src.content.main", new Main.MainView());
//# sourceMappingURL=main.view.js.map