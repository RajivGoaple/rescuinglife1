import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {UploadListPage} from '../pages/upload-list/upload-list'
import {UploadDetailsPage} from '../pages/upload-details/upload-details'

import {SearchPage} from '../pages/search/search' 
import {UploadItemPage} from '../pages/upload-item/upload-item'

import {AcceptedItemsPage} from '../pages/accepted-items/accepted-items'

import{ManageProfilePage} from '../pages/manage-profile/manage-profile'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  type:string="user";
@ViewChild(Nav) nav:Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var otpVerfied="";
      this.storage.get("otpVerified").then((val)=>{  
                                                    otpVerfied=val;
                                                    if(otpVerfied=="true"){ 
                                                      this.rootPage = HomePage;
                                                    }
                                                  });

                                                  this.storage.get("Type").then((val)=>{  
                                                    this.type=val;
                                                  });
     
    });
  }

  /**
   * openPage
   */
  public goToHome() {
    this.nav.setRoot(HomePage);
  }

  public goToUploadList() { 
    this.nav.setRoot(UploadListPage);
  }

  public goToSearchPage(){
    this.nav.setRoot(SearchPage);
  }

 public goToUploadItem(){
    this.nav.setRoot(UploadItemPage);
 }

 public goToAcceptedList(){
   this.nav.setRoot(AcceptedItemsPage);
 }

 public goToManageProfile(){
  this.nav.setRoot(ManageProfilePage);
}

}
