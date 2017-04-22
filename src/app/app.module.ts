import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { IonicStorageModule } from "@ionic/storage";

import { CoreModule } from "../core/core.module";

import { AppComponent } from './app.component';
import { TabsPage } from '../pages/tabs/tabs.component';
import { StudentPage } from '../pages/student/student.component';
import { UserPage } from '../pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsPage,
    UserPage,
    StudentPage
  ],
  imports: [
    BrowserModule,
    CoreModule,
    
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    TabsPage,
    UserPage,
    StudentPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation
  ]
})
export class AppModule {}
