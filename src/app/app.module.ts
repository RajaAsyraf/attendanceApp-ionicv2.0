import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AttendancePage } from '../pages/attendance/attendance';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PunchInService } from '../services/punchIn.service';
import { PunchOutPage } from '../pages/punch-out/punch-out';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AttendancePage,
    TabsPage,
    PunchOutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AttendancePage,
    TabsPage,
    PunchOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    [{provide: ErrorHandler, useClass: IonicErrorHandler}, PunchInService ]
  ]
})
export class AppModule {}
