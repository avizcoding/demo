module Main {
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
        }
    }
}

sap.ui.controller("src.content.main", new Main.MainController()); 