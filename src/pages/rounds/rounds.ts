import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider } from '../../providers/log/log';
/**
 * Generated class for the RoundsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rounds',
  templateUrl: 'rounds.html',
})
export class RoundsPage {

roundStatus: any = "Start";
	


  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide : LogProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rounds');
  }


postRounds() {



	this.logProvide.postDateTime();
	this.logProvide.postEntry(" - " + this.roundStatus +  " Rounds Check\n\n");
	this.navCtrl.pop();


}


}
