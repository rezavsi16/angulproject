
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpServices {
    constructor(private httpClient:HttpClient){}
    
    getHttpClients(url:string):Observable<any>{
        return this.httpClient.get(url);
      }
    postsHttpClients(url:string,jsonData:any):Observable<any>{
        return this.httpClient.post(url,jsonData);
    }
    putHttpClients(url:string,jsonData:any):Observable<any>{
        return this.httpClient.put(url,jsonData)
    }
}