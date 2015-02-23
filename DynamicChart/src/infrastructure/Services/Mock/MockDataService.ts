jQuery.sap.require("demo.src.infrastructure.Data.IDataService");
module services {
    export class MockDataService implements infrastructure.Data.IDataService {
        public getData(url: string, callback: (response: any) => void, payload: any = {}) {
            var data = 
            [{
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
        }
    }
}