import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginService } from "./login.service";
import {Injectable } from '@angular/core'
import {Observable} from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private login:LoginService){ }
    intercept(
        req:HttpRequest<any>,
        next:HttpHandler
    ):Observable<HttpEvent<any>>{
        let authReq=req;
        let token=this.login.getToken();
        console.log("inside interceptor")
        if(token!=null){
            authReq=authReq.clone({setHeaders:{Authorization: `Bearer ${token}`}
        })

        }
        return next.handle(authReq);

    }

}
export const AuthInterceptorProviders=[{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,
}
]
