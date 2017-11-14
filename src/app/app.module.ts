import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { OtpValidationPage } from '../pages//otp-validation/otp-validation';

import {UploadListPage} from '../pages/upload-list/upload-list'

import {UploadDetailsPage} from '../pages/upload-details/upload-details'

import {SearchPage} from '../pages/search/search'

import {UploadItemPage} from '../pages/upload-item/upload-item' 
// import { Storage } from '@ionic/storage'; 
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    OtpValidationPage,
    UploadListPage,
    UploadDetailsPage,
    SearchPage,
    UploadItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,OtpValidationPage,
    UploadListPage,
    UploadDetailsPage,
    SearchPage,
    UploadItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
