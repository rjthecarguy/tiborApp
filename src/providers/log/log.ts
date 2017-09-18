import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataProvider } from '../data/data'
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);
import { Subject } from 'rxjs/Subject';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the LogProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LogProvider {


logSubject : any = new Subject();
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




  constructor(public http: Http,public DBdata:DataProvider,  public alertCtrl: AlertController) {
    console.log('Hello LogProvider Provider');
  }



  
  openGuardLog(last4, location, role) : any {

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

                                        	
                                        this.logOpenMessage();   
                                        this.loadLog(data.docs[0]._id); //load existing log
                                        }  
                                               else {

                                               			this.logData.last4 = personData.docs[0].last4;      // move Staff data to local var
                  										this.logData.name = personData.docs[0].staffName;
                  										this.logData.lastLocation = location;
                  										this.logData.role = role;

                  										console.log(this.logData);

                  										//this.newLog();

                                               		} 

                              });




                } // end of 'yes' Else Statemant



      });



}


logOpenMessage() {
let alert = this.alertCtrl.create({
      title: 'Log Open',
      message: 'Your log is open.  You can to add entries to this log.  To close this log, go "Off Duty"  ',
     
      buttons: [
            
       
        {
          text: 'OK',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });

    alert.present();

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

              console.log(data);

                   this.logData._id = logID; 
                   this .logData.text =  data.docs[0].text; // get data to local record
                   this.logData._rev = data.docs[0]._rev;
                   this.logData.status = "open";
                   this.logData.type = "report";

                   this.logSubject.next(this.logData);  // post subject to subscribers

                   this.reportOpen = true;  


              });



}



getDateTime () {

var todayDate = new Date().toLocaleDateString();
var todayTime = new Date().toLocaleTimeString();


	return todayDate + "\n" + todayTime + "\n"; 


  }



newLog () {


        console.log("NEW LOG");

         this.logData._id = new Date().toISOString();

         this.logData.text = this.getDateTime();

         this.logData.onDate = new Date().toLocaleDateString();
         this.logData.onTime = new Date().toLocaleTimeString();
         this.logData.offDate = "";
         this.logData.offTime = "";
         



         this.logData.type = "report";
         this.logData.status = "open";


         this.logData.text += " - " + this.logData.name + " On Duty" + "\n\n";

         
         this.DBdata.db.put(

           {_id : this.logData._id,
             type: "report",
             status: "open",
             onDate: this.logData.onDate,
             onTime: this.logData.onTime,
             offDate: this.logData.offDate,
             offtime: this.logData.offTime,
             text: this.logData.text,
             name: this.logData.name,
             last4: this.logData.last4}

           );

         this.loadLog(this.logData._id);

         
         this.logSubject.next(this.logData);
          


}




}
