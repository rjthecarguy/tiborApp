import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupsPage } from './sups';

@NgModule({
  declarations: [
    SupsPage,
  ],
  imports: [
    IonicPageModule.forChild(SupsPage),
  ],
})
export class SupsPageModule {}
