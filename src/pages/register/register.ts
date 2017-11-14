import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OtpValidationPage } from '../otp-validation/otp-validation';
import {User} from '../../Models/User'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.user=new User();
  if(navParams!=null && navParams.data!="")
  { 
    this.user.Mobile=navParams.data;
  }
  }
public register(){
  this.navCtrl.push(OtpValidationPage,this.user.Mobile)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
