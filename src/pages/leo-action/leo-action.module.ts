import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeoActionPage } from './leo-action';

@NgModule({
  declarations: [
    LeoActionPage,
  ],
  imports: [
    IonicPageModule.forChild(LeoActionPage),
  ],
})
export class LeoActionPageModule {}
