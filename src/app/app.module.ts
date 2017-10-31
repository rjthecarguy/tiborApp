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
import { DetectionPage } from "../pages/detection/detection";
import { MaintPage } from "../pages/maint/maint";
import { TrespassPage } from "../pages/trespass/trespass";
import { LunchPage } from "../pages/lunch/lunch";
import { SupsPage } from "../pages/sups/sups";
import { CustomPage } from "../pages/custom/custom";
import { ChangeLocationPage} from "../pages/change-location/change-location";
import { LeoActionPage} from "../pages/leo-action/leo-action"
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
    LeoActionPage,
    TrespassPage,
    SupsPage,
    MaintPage,
    LunchPage,
    CustomPage,
    DetectionPage,
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
    SupsPage,
    LogPage,
    OnDutyPage,
    LunchPage,
    VehicleInspectionPage,
    ChangeLocationPage,
    LeoActionPage,
    MaintPage,
    CustomPage,
    TrespassPage,
    DetectionPage,
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
