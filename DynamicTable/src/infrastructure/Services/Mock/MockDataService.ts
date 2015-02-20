jQuery.sap.require("demo.src.infrastructure.Data.IDataService");
module services {
    export class MockDataService implements infrastructure.Data.IDataService {
        public getData(url: string, callback: (response: any) => void, payload: any = {}) {
            var data = 
            [{
                "title": "The Man Who Killed Don Quixote",
                "year": " 2016"
            },
            {
                "title": "Damascus Cover",
                "year": " 2015"
            },
            {
                "title": "Tarzan",
                "year": " 2016"
            },
            {
                "title": "ChickLit",
                "year": " 2015"
            },
            {
                "title": "AKA Nadia",
                "year": " 2015"
            },
            {
                "title": "The Last Panthers",
                "year": " 2015"
            },
            {
                "title": "Hercules",
                "year": " 2014/I"
            },
            {
                "title": "Doctor Who",
                "year": " 2013"
            },
            {
                "title": "Snowpiercer - le transperceneige",
                "year": " 2013"
            },
            {
                "title": "Only Lovers Left Alive",
                "year": " 2013"
            },
            {
                "title": "King Lear: Scene 133",
                "year": " 2013"
            },
            {
                "title": "Look Again",
                "year": " 2013"
            },
            {
                "title": "Benjamin Britten: Peace and Conflict",
                "year": " 2013"
            },
            {
                "title": "Charlie Countryman",
                "year": " 2013"
            },
            {
                "title": "Merlin",
                "year": " 2008-2012"
            },
            {
                "title": "Labyrinth",
                "year": " 2012"
            }];
            callback({ data: data });
        }
    }
}