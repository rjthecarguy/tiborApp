import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider} from '../../providers/log/log'

/**
 * Generated class for the LunchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunch',
  templateUrl: 'lunch.html',
})
export class LunchPage {

	lunchStatus: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider) {
  }



  postLunch() {



	this.logProvide.postDateTime();
	this.logProvide.postEntry(" - " + this.lunchStatus +  "\n\n");
	this.navCtrl.pop();


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LunchPage');
  }

}
