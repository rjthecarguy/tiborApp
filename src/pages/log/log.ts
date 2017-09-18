import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnDutyPage } from '../on-duty/on-duty';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider) {


  	this.logProvide.logSubject.subscribe((logData) => {

	this.reportText = logData.text;

	});

}





onDuty () {

// push On Duty Page	

this.navCtrl.push(OnDutyPage);
	
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

}
