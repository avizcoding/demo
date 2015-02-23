jQuery.sap.require("demo.src.infrastructure.Services.Mock.MockDataService");
module Main {

    export class MainView {

        private _dataLoader: infrastructure.Data.IDataLoader;
        private _controller: any;
        private _layout: any;

        constructor() {
            this._dataLoader = infrastructure.Context.DataLoader;
        }

        public getControllerName(): string {
            return "src.content.main";
        }

        public createContent(controller: MainController) {

            var that = this;
            this._controller = controller;

            this._layout = new sap.ui.commons.layout.VerticalLayout();

            this._controller.init();

            var receivedData = ((data) => {
                this._controller.setModel(data);
                that.buildScreen();
            });

            this.getData(receivedData);

            return this._layout;
        }

        private getData(callback: (response: any) => void): void {
            var that = this;
            var dataReceived = ((response: any) => {
                callback(response);
            });

            this._dataLoader.Run(new services.MockDataService(), "", dataReceived);
        }

        private buildScreen(): void {
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
        }

        private setControlsModel(): void {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var dataChart = this._layout.getContent()[0];
            this.buildTable(dataChart);   
        }

        private buildTable(chart: any): void {
            chart.addColumn(new sap.makit.Column({ name: "episode", value: "{episode}" }));
            chart.addColumn(new sap.makit.Column({ name: "rating", value: "{rating}" }));
            chart.bindRows("/data");
        }

    }

}

sap.ui.jsview("src.content.main", new Main.MainView());