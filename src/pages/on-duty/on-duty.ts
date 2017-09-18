import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider } from '../../providers/log/log';



/**
 * Generated class for the OnDutyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-on-duty',
  templateUrl: 'on-duty.html',
})
export class OnDutyPage {

	// get data from page

	position: any = "guard";
	location: any ="";
	last4: any = "";

	// has page been submitted

	submitted: any = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public log:LogProvider) {
  }



goOnDuty() {

this.submitted = true;




	// if guard

	if(this.position=="guard")
			{
				if(this.last4 && this.location)
				{

					let last4 = this.last4;
					let location = this.location;
					let position = this.position;

					this.log.openGuardLog(last4,location,position);

					this.navCtrl.pop();

				

				}

			}

	// if supervisor		

	if(this.position=="supervisor")
			{

				console.log("super");



			}





}


  ionViewDidLoad() {
    console.log('ionViewDidLoad OnDutyPage');
  }

}
