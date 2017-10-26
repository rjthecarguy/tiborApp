import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider} from '../../providers/log/log'


/**
 * Generated class for the MaintPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maint',
  templateUrl: 'maint.html',
})
export class MaintPage {

	maintNotes: any;
	maintStatus: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider  ) {
  }


  postMaint() {



	this.logProvide.postDateTime();
	this.logProvide.postEntry(" - " + this.maintStatus +  "\n" + " - Notes: " + this.maintNotes + "\n\n");
	this.navCtrl.pop();


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintPage');
  }

}
