import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ headers: req.headers.set('X-Auth-Token', '465aa38216ff481094105918779ccebc') });
    return next.handle(dupReq);
  }
};
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
  ]
})
export class InterceptorModule { }