import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintPage } from './maint';

@NgModule({
  declarations: [
    MaintPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintPage),
  ],
})
export class MaintPageModule {}
