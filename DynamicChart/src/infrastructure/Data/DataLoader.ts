module infrastructure.Data {
    export interface IDataLoader {
        Run(dataService: IDataService, dataResponse: any, callback: (response: any) => void);
    }

    export class DataLoader implements IDataLoader {

        public Run(dataService: IDataService, dataResponse: any, callback: (response: any) => void) {
            dataService.getData("", (response) => {
                callback(response);
            });
        }
    }
}