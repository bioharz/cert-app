import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LibraryPage } from '../pages/library/library';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ValidatePage} from "../pages/validate/validate";
import { ValidatorProvider } from '../providers/validator/validator';
import {HttpClientModule} from "@angular/common/http";
import {ValidatedPage} from "../pages/validated/validated";

import { QRScanner } from '@ionic-native/qr-scanner';
import {QrScannerPage} from "../pages/qr-scanner/qr-scanner";

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    SettingsPage,
    ProfilePage,
    TabsPage,
    ValidatePage,
    ValidatedPage,
    QrScannerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    SettingsPage,
    ProfilePage,
    TabsPage,
    ValidatePage,
    ValidatedPage,
    QrScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ValidatorProvider,
    QRScanner
  ]
})
export class AppModule {}
