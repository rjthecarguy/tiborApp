import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider} from '../../providers/log/log'

/**
 * Generated class for the CustomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom',
  templateUrl: 'custom.html',
})
export class CustomPage {

	customNotes: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider) {
  }


 postCustom() {



	this.logProvide.postDateTime();
	this.logProvide.postEntry(" -  Notes: " + this.customNotes + "\n\n");
	this.navCtrl.pop();


}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
  }

}
