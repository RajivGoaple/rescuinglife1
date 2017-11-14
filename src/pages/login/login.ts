import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { RegisterPage } from '../register/register';

import { ToastController } from 'ionic-angular';
import { OtpValidationPage } from '../otp-validation/otp-validation';
// import {Helper} from '../../Helper/Helper'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;
  registerCredentials = { username: '', password: '' };
 mobileNumber:string="";
  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
  public login() {
    if(this.mobileNumber=="1234"){
            this.navCtrl.push(OtpValidationPage);  
    }
    else{   
      this.presentToast("Coudn't find user, Please register",10000)
      this.navCtrl.push(RegisterPage,this.mobileNumber);
    }
  }

  
    public presentToast(msg:string,duration:number) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: duration
      });
      toast.present();
    }

 public createAccount(){
  this.navCtrl.push(RegisterPage,this.mobileNumber);
 }

}
