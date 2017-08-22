import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataProvider} from '../data/data';
import PouchDBFind from 'pouchdb-find';
import PouchDB from 'pouchdb';
PouchDB.plugin(PouchDBFind);



/*
  Generated class for the PersonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PersonProvider {

  constructor(public http: Http, public DBdata:DataProvider) {
    console.log('Hello PersonProvider Provider');
  }


  verify(last4) {


  	this.DBdata.db.createIndex({
  		index: {fields: ['type',"last4","status"]}
		});


  			this.DBdata.db.find({
  				selector: {
    						last4: {$eq:last4},
    						type: {$eq:"staff"} 
   							}
      							}).then((data) => {

													return false;


      												});

  	

  }

}
