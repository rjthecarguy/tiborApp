import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogProvider} from '../../providers/log/log'
/**
 * Generated class for the SupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sups',
  templateUrl: 'sups.html',
})
export class SupsPage {


	sups :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public logProvide:LogProvider) {


  	this.logProvide.supSubject.subscribe((supData) => {

	this.sups = supData;

	});
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SupsPage');

this.logProvide.loadSups();

  }




}
