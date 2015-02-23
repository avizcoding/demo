jQuery.sap.require("demo.src.infrastructure.Data.DataLoader");
var infrastructure;
(function (infrastructure) {
    var Context = (function () {
        function Context() {
        }
        Object.defineProperty(Context, "DataLoader", {
            get: function () {
                return this._dataLoader;
            },
            enumerable: true,
            configurable: true
        });
        Context.Initialize = function () {
        };
        Context._dataLoader = new infrastructure.Data.DataLoader();
        return Context;
    })();
    infrastructure.Context = Context;
    Context.Initialize();
})(infrastructure || (infrastructure = {}));
//# sourceMappingURL=Context.js.map