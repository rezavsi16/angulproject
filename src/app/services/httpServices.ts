// import { Http } from '@angular/http';
import { Observable, of} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http'

@Injectable()
export class HttpServices {
    constructor(private httpClient:HttpClient){}

    value:object;
    displayItems;
    result;
    errorFromSubscribe;
    errorFromCatch;
    link:string;
    data=Array();
    
    // getHttpClients():Observable<any>{d
    // this.httpClient.get('https://api.myjson.com/bins/1gb9tf').subscribe((res: Response) => {
    //     this.result = res.results;
    //     return this.result;
    //   }, error => {
    //     console.log(error);
    //     this.errorFromSubscribe = error;
    //   });
    // }
    getHttpClients():Observable<any>{
        return this.httpClient.get("https://api.myjson.com/bins/1gb9tf");
      }

    getHttpValue(){
        return of(this.displayItems);
    }
}