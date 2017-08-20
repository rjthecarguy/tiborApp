import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogPage } from '../log/log';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


openLogPage() {

  	this.navCtrl.setRoot(LogPage);

  }


}
