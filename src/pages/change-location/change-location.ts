import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider } from '../../providers/log/log';

/**
 * Generated class for the ChangeLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-location',
  templateUrl: 'change-location.html',
})
export class ChangeLocationPage {

	location: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider) {
  }


  changeLocation () {

  	let entry = " - Location Change" + "\n" + " -  " + this.location + "\n\n";
  	this.logProvide.postEntry(entry);

  	this.navCtrl.pop();



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeLocationPage');
  }

}
