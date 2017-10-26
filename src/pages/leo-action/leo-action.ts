import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider} from '../../providers/log/log'

/**
 * Generated class for the LeoActionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leo-action',
  templateUrl: 'leo-action.html',
})
export class LeoActionPage {

	leoAction: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider) {
  }


   postLeo() {


  	this.logProvide.postDateTime();
	this.logProvide.postEntry(" - " + this.leoAction + "\n\n");
	this.navCtrl.pop();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LeoActionPage');
  }

}
