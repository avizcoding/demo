jQuery.sap.require("demo.src.infrastructure.Data.DataLoader");
module infrastructure {
    export class Context {
        private static _dataLoader: infrastructure.Data.IDataLoader = new infrastructure.Data.DataLoader();

        public static get DataLoader(): any {
            return this._dataLoader;
        }

        public static Initialize() {
        }
    }

    Context.Initialize();
}