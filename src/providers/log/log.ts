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
supSubject : any = new Subject();

logOpen: any = false;



logData =      {"_id": "",
                "_rev": "",
                "onDate":"",
                "onTime":"",
                "offTime":"",
                "offDate":"",
                "last4":"",
                "role":"",
                "position":"",
                "lastLocation":"",
                "type":"",
                "text":"",
                "name":"",
                "status":""};




  constructor(public http: Http,public DBdata:DataProvider,  public alertCtrl: AlertController) {
    console.log('Hello LogProvider Provider');
  }



  
  openGuardLog(last4, location, role, position) : any {

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
                                        console.log(data.docs[0]._id);
                                        }  
                                               else {

                                               			this.logData.last4 = personData.docs[0].last4;      // move Staff data to local var
                  										this.logData.name = personData.docs[0].staffName;
                  										this.logData.lastLocation = location;
                  										this.logData.role = role;
                                      this.logData.position = position;

                  										console.log(this.logData);

                  										this.newLog();

                                               		} 

                              });




                } // end of 'yes' Else Statemant



      });



}




reportWarning() {


let alert = this.alertCtrl.create({
      title: 'No Log Open',
      message: 'Please Go On Duty',
     
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




postEntry(entry) {

console.log(this.logData);


this.getRevision(this.logData._id);

this.logData.text += entry;
this.DBdata.db.put(this.logData);
this.logSubject.next(this.logData);





}


postLocationChange(newLocation) {

console.log(this.logData);

this.getRevision(this.logData._id);


this.logData.lastLocation = newLocation;
this.DBdata.db.put(this.logData);
this.logSubject.next(this.logData);



}





postDateTime() {

  this.logData.text += this.getDateTime();

  console.log(this.logData.text);

  this.logSubject.next(this.logData);
}



getRevision(logID)  {

this.DBdata.db.find({            // Get Log by ID
              selector: {
                        _id: {$eq:logID} 
                         }
              }).then((data) => {

              

                  
                  
                   this.logData._rev = data.docs[0]._rev;
                  
                   this.logSubject.next(this.logData);  // post subject to subscribers

                     

              });


}

loadSups ()  {

    

      this.DBdata.db.createIndex({     // Create index to get by ID
          index: {fields: ['role']}
          })


          this.DBdata.db.find({            // Get Log by ID
              selector: {
                        role: {$eq:"Supervisor"},
                        status: {$eq:"open"} 
                         }
              }).then((data) => {

              console.log(data.docs);

              this.supSubject.next(data.docs);

                   
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

              console.log(data);

                   this.logData._id = logID; 
                   this .logData.text =  data.docs[0].text; // get data to local record
                   this.logData._rev = data.docs[0]._rev;
                   this.logData.status = "open";
                   this.logData.type = "report";
                   this.logData.onTime = data.docs[0].onTime;
                   this.logData.onDate = data.docs[0].onDate;
                   this.logData.role = data.docs[0].role;
                   this.logData.position = data.docs[0].position;
                   this.logData.last4 = data.docs[0].last4;
                   this.logData.lastLocation = data.docs[0].location;
                   this.logData.name = data.docs[0].name;


                   this.logSubject.next(this.logData);  // post subject to subscribers

                   this.logOpen = true;  


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


         this.logData.text += " - " + this.logData.name + " On Duty" + "\n";
         this.logData.text += " - " + "Role: " + this.logData.role + "\n";

         	if (this.logData.role == 'Guard')
         	{

         		this.logData.text += " - " + "Loc: " + this.logData.lastLocation + "\n\n";
         	}
         	
         		else 

         			{
         				this.logData.text += " - " + "Pos: " + this.logData.position + "\n\n";
         			}	

         
         this.DBdata.db.put(

           {_id : this.logData._id,
             type: "report",
             status: "open",
             onDate: this.logData.onDate,
             onTime: this.logData.onTime,
             offDate: this.logData.offDate,
             offtime: this.logData.offTime,
             role: this.logData.role,
             position: this.logData.position,
             location: this.logData.lastLocation, 
             text: this.logData.text,
             name: this.logData.name,
             last4: this.logData.last4}

           );

         this.loadLog(this.logData._id);

         
         this.logSubject.next(this.logData);
          


}



closeReport() {

console.log("Close");




this.logData.status = "closed"

this.logData.offDate = new Date().toLocaleDateString();
this.logData.offTime = new Date().toLocaleTimeString();

this.logData.text += this.getDateTime();
this.logData.text += " - " + this.logData.name + " Off Duty" + "\n\n";

this.DBdata.db.put(this.logData);

this.logSubject.next(this.logData);

} 



}
