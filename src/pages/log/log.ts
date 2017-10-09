import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { OnDutyPage } from '../on-duty/on-duty';
import { VehicleInspectionPage } from '../vehicle-inspection/vehicle-inspection';
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







offDuty() {

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


vehicleInspection() {

if(this.logProvide.logOpen == false) 
    {
      this.logProvide.reportWarning();
      return;
    } 
    

 this.navCtrl.push(VehicleInspectionPage);


}



  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

}
