import { Injectable, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let username: string = environment.apiUsername;
        let password: string = environment.apiPassword;
        const newAuthRequest = request.clone({ headers: request.headers.set("AuthInterceptor", "Baisc" + btoa(username + ":" + password)) });

        return next.handle(newAuthRequest);
    }
}