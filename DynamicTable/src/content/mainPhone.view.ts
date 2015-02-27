jQuery.sap.require("demo.src.infrastructure.Services.Mock.MockDataService");
module MainPhone {

    export class MainView {

        private _dataLoader: infrastructure.Data.IDataLoader;
        private _controller: any;
        private _layout: any;

        constructor() {
            this._dataLoader = infrastructure.Context.DataLoader;
        }

        public getControllerName(): string {
            return "src.content.mainPhone";
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
            var dataTable = new sap.m.List("dataTable");
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
        }

    }

}

sap.ui.jsview("src.content.mainPhone", new MainPhone.MainView());