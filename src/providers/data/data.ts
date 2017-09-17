import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {


	// setup variables for database and remote connection

	db: any;
  	remote: string = 'http://74.208.165.188:5984/tibor2';



  constructor(public http: Http) {


  	// create new Pouch database

  	this.db = new PouchDB('tibor2');

  	let options = {
          live: true,
          retry: true
        };


        // sync with CoucDB server
 
       this.db.sync(this.remote, options).on('error',function (err) {

         
         
       });




        }

}
