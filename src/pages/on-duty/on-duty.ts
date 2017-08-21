import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



goOnDuty() {

this.submitted = true;


console.log("open");

	// if guard

	if(this.position=="guard")
			{
				if(this.last4 && this.location)
				{
					console.log("GOOD");
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
