import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserIDInterceptor implements HttpInterceptor {
  private readonly USER_ID = {
    userId: '789',
  };

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      body: req.body ? { ...req.body, ...this.USER_ID } : this.USER_ID,
    });
    return next.handle(cloneReq);
  }
}
