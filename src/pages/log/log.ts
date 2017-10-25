import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { OnDutyPage } from '../on-duty/on-duty';
import { VehicleInspectionPage } from '../vehicle-inspection/vehicle-inspection';
import { ChangeLocationPage } from '../change-location/change-location';
import { RoundsPage } from '../rounds/rounds';
import { LogProvider } from '../../providers/log/log';



/**
 * Generated class for the LogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

reportText: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider, public alertCtrl: AlertController) {


  	this.logProvide.logSubject.subscribe((logData) => {

	this.reportText = logData.text;

	});

}


offDutyMessage() {
let alert = this.alertCtrl.create({
      title: 'Off Duty Error',
      message: 'Your have to go "On Duty" before you can go "Off Duty"  ',
     
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




offDuty() {


  if(this.logProvide.logData.status == "")
  {
    this.offDutyMessage();
    return;
  }
  

  let alert = this.alertCtrl.create({
      title: 'Off Duty',
      message: 'This will close your open log and record you as off duty.',
      
        buttons: [
        {
          text: 'Go Off Duty',
          handler: () => {
            
            this.logProvide.closeReport();
          
          }
        },
        
       
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });

    alert.present();



}







onDuty () {

// push On Duty Page	

this.navCtrl.push(OnDutyPage);
	
}


chngeLocation() {

this.navCtrl.push(ChangeLocationPage);

}



vehicleInspection() {

if(this.logProvide.logOpen == false) 
    {
      this.logProvide.reportWarning();
      return;
    } 
    

 this.navCtrl.push(VehicleInspectionPage);


}


rounds() {

if(this.logProvide.logOpen == false) 
    {
      this.logProvide.reportWarning();
      return;
    } 

   this.navCtrl.push(RoundsPage); 

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

}
