import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataProvider } from '../data/data'
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the LogProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LogProvider {


reportPageSubject : any = new Subject();
reportOpen: any = false;



logData =      {"_id": "",
                "_rev": "",
                "onDate":"",
                "onTime":"",
                "offTime":"",
                "offDate":"",
                "last4":"",
                "role":"",
                "lastLocation":"",
                "type":"",
                "text":"",
                "name":"",
                "status":""};




  constructor(public http: Http,public DBdata:DataProvider) {
    console.log('Hello LogProvider Provider');
  }



  
  openGuardLog(last4, location) : any {

  this.DBdata.db.createIndex({
  index: {fields: ['type',"last4","status"]}
})


this.DBdata.db.find({
  selector: {
    last4: {$eq:last4},
    type: {$eq:"staff"} 
   }
      }).then((personData) => {

            if(personData.docs.length == 0)   // Staff not foud by last 4
                return false;

              else  // Staff found by last 4
                {

                

                    this.DBdata.db.find({    // find open report
                        selector:

                        {
                        last4: {$eq:last4},
                        type: {$eq:"report"},
                        status: {$eq:"open"} 
                        }  

                          }).then((data) => {
                                    if(data.docs.length !=0)  // Open log found
                                        {

                                        	
                                         //this.logOpenMessage();   
                                        //this.loadLog(data.docs[0]._id); //load existing log
                                        }  
                                               else {

                                               			this.logData.last4 = personData.docs[0].last4;      // move Staff data to local var
                  										this.logData.name = personData.docs[0].staffName;
                  										this.logData.lastLocation = location;

                  										console.log(this.logData);

                  										//this.newLog();

                                               		} 

                              });




                } // end of 'yes' Else Statemant



      });



}



loadLog (logID)  {

    console.log("LOAD LOG");
    console.log(logID);

      this.DBdata.db.createIndex({     // Create index to get by ID
          index: {fields: ['_id']}
          })


          this.DBdata.db.find({            // Get Log by ID
              selector: {
                        _id: {$eq:logID} 
                         }
              }).then((data) => {

              

                   this.logData._id = logID; 
                   this .logData.text =  data.docs[0].text; // get data to local record
                   this.logData._rev = data.docs[0]._rev;
                   this.logData.status = "open";
                   this.logData.type = "report";

                   this.reportPageSubject.next(this.logData);  // post subject to subscribers

                   this.reportOpen = true;  

              });



}


}
