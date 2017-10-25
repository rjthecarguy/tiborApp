import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { VehicleInspectionPage } from '../pages/vehicle-inspection/vehicle-inspection';
import { LogPage } from '../pages/log/log';
import { RoundsPage } from '../pages/rounds/rounds';
import { OnDutyPage } from "../pages/on-duty/on-duty";
import { ChangeLocationPage} from "../pages/change-location/change-location"
import { DataProvider } from '../providers/data/data';
import { LogProvider } from '../providers/log/log';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogPage,
    OnDutyPage,
    VehicleInspectionPage,
    ChangeLocationPage,
    RoundsPage
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogPage,
    OnDutyPage,
    VehicleInspectionPage,
    ChangeLocationPage,
    RoundsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    LogProvider
    
  ]
})
export class AppModule {}
