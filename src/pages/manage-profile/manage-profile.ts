import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'; 
import { User } from '../../Models/User';

/**
 * Generated class for the ManageProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-profile',
  templateUrl: 'manage-profile.html',
})
export class ManageProfilePage {
public user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage ) {
  this.user=new User();
  this.storage.get("FirstName").then((val)=>{this.user.FirstName=val; });
 
  this.storage.get("LastName").then((val)=>{this.user.LastName=val; });
 
  this.storage.get("Email").then((val)=>{this.user.Email=val; });
 
  this.storage.get("Mobile").then((val)=>{this.user.Mobile=val; });
 
  this.storage.get("Address").then((val)=>{this.user.Address=val; });
 
  this.storage.get("PrefferedLocation").then((val)=>{this.user.PrefferedLocation=val; });
 
  this.storage.get("Type").then((val)=>{this.user.Type=val; });
 
  this.storage.get("OrgnizationName").then((val)=>{this.user.OrgnizationName=val; });
 
  this.storage.get("AboutOrgnization").then((val)=>{this.user.AboutOrgnization=val; });

  }

  public saveProfile(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageProfilePage');
  }

}
