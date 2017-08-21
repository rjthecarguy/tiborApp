import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { LogPage } from '../pages/log/log';
import { OnDutyPage } from "../pages/on-duty/on-duty";
import { DataProvider } from '../providers/data/data';
import { ReportProvider } from '../providers/report/report';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogPage,
    OnDutyPage
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
    OnDutyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    ReportProvider
  ]
})
export class AppModule {}
