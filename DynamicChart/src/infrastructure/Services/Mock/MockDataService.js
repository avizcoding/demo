jQuery.sap.require("demo.src.infrastructure.Data.IDataService");
var services;
(function (services) {
    var MockDataService = (function () {
        function MockDataService() {
        }
        MockDataService.prototype.getData = function (url, callback, payload) {
            if (payload === void 0) { payload = {}; }
            var data = [{
                "episode": "1x01",
                "title": "Pilot",
                "rating": "8.6"
            }, {
                "episode": "1x02",
                "title": "Cat it's in the bag...",
                "rating": "8.2"
            }, {
                "episode": "1x03",
                "title": "And the bag's in the river",
                "rating": "8.3"
            }, {
                "episode": "1x04",
                "title": "Cancer man",
                "rating": "7.9"
            }, {
                "episode": "1x05",
                "title": "Gray matter",
                "rating": "7.9"
            }, {
                "episode": "1x06",
                "title": "Crazy handful of nothin'",
                "rating": "8.7"
            }, {
                "episode": "1x07",
                "title": "A no-rough-stuff-type deal",
                "rating": "8.3"
            }];
            callback({ data: data });
        };
        return MockDataService;
    })();
    services.MockDataService = MockDataService;
})(services || (services = {}));
//# sourceMappingURL=MockDataService.js.map