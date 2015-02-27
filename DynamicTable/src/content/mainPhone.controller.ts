module MainPhone {
    export class MainController {

        private _model: any;

        public init(...args: any[]): void {
        }

        public onAfterRendering(): void {
        }

        public setModel(model: any): void {
            if (this._model == null) {
                this._model = new sap.ui.model.json.JSONModel();
            }
            this._model.setData(model);
            this.setDataStructure();
        }

        public getModel(): any {
            return this._model;
        }

        private setDataStructure(): void {
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
        }
    }
}

sap.ui.controller("src.content.mainPhone", new MainPhone.MainController()); 