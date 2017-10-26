import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogProvider} from '../../providers/log/log'



/**
 * Generated class for the TrespassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trespass',
  templateUrl: 'trespass.html',
})
export class TrespassPage {

	contact: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide:LogProvider,  public formBuilder: FormBuilder) {


  		this.contact = formBuilder.group({
        fName: [''],
        lName: [''],
        id: [''],
        dob: [''],
		notes: ['']        
    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrespassPage');
  }


  postTrespass() {


  	let fName = this.contact.controls.fName.value;
  	let lName = this.contact.controls.lName.value;
  	let dob = this.contact.controls.dob.value;
  	let id = this.contact.controls.id.value;
  	let notes = this.contact.controls.notes.value;

  	this.logProvide.postDateTime();
	this.logProvide.postEntry(" - Trespasser Info\n" + "First Name " + fName + "\n" + "Last Name: " + lName + "\n" + "DOB: " + dob + "\n" + "ID/Lic: " + id + "\n" + "Notes : " + notes + "\n\n" );
	this.navCtrl.pop();
  }

}
