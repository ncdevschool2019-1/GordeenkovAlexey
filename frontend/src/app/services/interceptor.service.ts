import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from "./token.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      authRequest = request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)});
    }
    return next.handle(authRequest);
  }

}

export const httpInterceptorProviders = {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true};
