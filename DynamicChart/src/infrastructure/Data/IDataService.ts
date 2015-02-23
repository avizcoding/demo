module infrastructure.Data {
    export interface IDataService {
        getData(url: string, callback: (response: any) => void, payload?: any): void;
    }
} 