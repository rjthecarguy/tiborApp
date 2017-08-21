import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnDutyPage } from './on-duty';

@NgModule({
  declarations: [
    OnDutyPage,
  ],
  imports: [
    IonicPageModule.forChild(OnDutyPage),
  ],
})
export class OnDutyPageModule {}
