var infrastructure;
(function (infrastructure) {
    var Data;
    (function (Data) {
        var DataLoader = (function () {
            function DataLoader() {
            }
            DataLoader.prototype.Run = function (dataService, dataResponse, callback) {
                dataService.getData("", function (response) {
                    callback(response);
                });
            };
            return DataLoader;
        })();
        Data.DataLoader = DataLoader;
    })(Data = infrastructure.Data || (infrastructure.Data = {}));
})(infrastructure || (infrastructure = {}));
//# sourceMappingURL=DataLoader.js.map