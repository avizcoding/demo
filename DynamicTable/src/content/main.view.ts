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

            this.getActor(receivedData);

            return this._layout;
        }

        private getActor(callback: (response: any) => void): void {
            var that = this;
            var dataReceived = ((response: any) => {
                callback(response);
            });

            this._dataLoader.Run(new services.MockDataService(), "", dataReceived);
        }

        private buildScreen(): void {
            var dataTable = new sap.m.Table("dataTable");
            this._layout.addContent(dataTable);
            this.setControlsModel();
        }

        private setControlsModel(): void {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var dataTable = this._layout.getContent()[0];
            this.buildTable(model, dataTable);   
        }

        private buildTable(model: any, table: any): void {
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
        }

    }

}

sap.ui.jsview("src.content.main", new Main.MainView());