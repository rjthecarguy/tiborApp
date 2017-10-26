import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider } from '../../providers/log/log';

/**
 * Generated class for the DetectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detection',
  templateUrl: 'detection.html',
})
export class DetectionPage {



	z1: any = false;
	z2: any = false;
	z3: any = false;
	z4: any = false;
	z5: any = false;
	z6: any = false;
	z7: any = false;
	z8: any = false;
	z9: any = false;
	z10: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide: LogProvider) {
  }


  postDetection() {

	this.logProvide.getDateTime();
	this.logProvide.postEntry(" - Detection Check\n" + 
							"  - Zone 1 Checked: " + this.z1 + "\n" +
							"  - Zone 2 Checked: " + this.z2 + "\n" +
							"  - Zone 3 Checked: " + this.z3 + "\n" +
							"  - Zone 4 Checked: " + this.z4 + "\n" +
							"  - Zone 5 Checked: " + this.z5 + "\n" +
							"  - Zone 6 Checked: " + this.z6 + "\n" +
							"  - Zone 7 Checked: " + this.z7 + "\n" +
							"  - Zone 8 Checked: " + this.z8 + "\n" +
							"  - Zone 9 Checked: " + this.z9 + "\n" +
							"  - Zone 10 Checked: " + this.z10 + "\n\n");
	this.navCtrl.pop();


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetectionPage');
  }

}
