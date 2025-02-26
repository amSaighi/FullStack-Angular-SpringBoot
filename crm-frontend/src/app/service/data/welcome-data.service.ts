import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  executeHelloWorldServiceWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`, {headers});
  }

  createBasicAuthenticationHeader() {
    let username =  'houarizegai';
    let password = '0000';
    // btoa method: convert a string to base-64 encoding
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
