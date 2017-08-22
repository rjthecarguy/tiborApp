import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataProvider} from '../data/data';



/*
  Generated class for the PersonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PersonProvider {

  constructor(public http: Http) {
    console.log('Hello PersonProvider Provider');
  }


  verify() {


  	return false;


  }

}
