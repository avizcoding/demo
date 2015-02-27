jQuery.sap.require("demo.src.infrastructure.Services.Mock.MockDataService");
module MainDesktop {

    export class MainView {

        private _dataLoader: infrastructure.Data.IDataLoader;
        private _controller: any;
        private _layout: any;

        constructor() {
            this._dataLoader = infrastructure.Context.DataLoader;
        }

        public getControllerName(): string {
            return "src.content.mainDesktop";
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
            var dataTable = new sap.ui.table.Table("dataTable");
            this._layout.addContent(dataTable);
            this.setControlsModel();
        }

        private setControlsModel(): void {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var dataTable = this._layout.getContent()[0];
            this.buildTable(dataTable);   
        }

        private buildTable(table: any): void {
            /* Bindings */
            table.bindAggregation("columns", "/dataStructures", function (sId, dataModel) {
                var columnId = dataModel.getObject().field;
                return new sap.ui.table.Column({
                    label: new sap.ui.commons.Label({ text: columnId }),
                    template: new sap.ui.commons.TextView().bindProperty("text", columnId),
                    sortProperty: columnId,
                    filterProperty: columnId
                });
            });

            table.bindRows("/data");
        }

    }

}

sap.ui.jsview("src.content.mainDesktop", new MainDesktop.MainView());