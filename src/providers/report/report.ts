import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ReportProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReportProvider {

  constructor(public http: Http) {
    console.log('Hello ReportProvider Provider');
  }



  openGuardLog(last4,location) {

console.log(last4);
console.log(location);

  }

}
