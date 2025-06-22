import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public token: string | null = null; 
  constructor() {
    this.token = sessionStorage.getItem('token');
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Bearer ${this.token}`

    );
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}` // ou récupéré dynamiquement
      }
    });

    return next.handle(clonedReq);
  }
}
