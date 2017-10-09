import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider } from '../../providers/log/log';

/**
 * Generated class for the VehicleInspectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-inspection',
  templateUrl: 'vehicle-inspection.html',
})
export class VehicleInspectionPage {

miles : any;
fuel : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleInspection');
  }


  postVehicleInspection() {

  	this.logProvide.postDateTime();
  	this.logProvide.postEntry(" - Vehicle Inspection\n" + " - Mileage: " + this.miles +"\n" + " - Fuel: " + this.fuel + "%" + "\n\n");
  	this.navCtrl.pop();


  }

}
