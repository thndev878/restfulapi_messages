import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient needs to be imported into the service

@Injectable(
    // { providedIn: 'root' }
    )
export class HttpService {
    constructor(private _http: HttpClient) { // _http is being injected // attribute of the class
        this.getMessages();
    }
    getMessages() {
        // our http response is an Observable, store it in a variable
        let tempObservable = this._http.get('/messages');
        // subscribe to the Observable and provide the code we would like to do with our data from the response
        tempObservable.subscribe(data => console.log("Got our messages!", data));
    }
}
