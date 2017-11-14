import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the OtpValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-validation',
  templateUrl: 'otp-validation.html',
})
export class OtpValidationPage {
public otp:any;
public mobileNumber;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    this.mobileNumber=navParams.data;
  }

 public presentToast(msg:string,duration:number) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration
    });
    toast.present();
  }

  public resendOTP(){
    this.presentToast("OTP has sent successfully!",3000);
  }

  public validateOTP(){
   if(this.otp=="1234"){
this.navCtrl.push(HomePage);
   }
   else{ 
    this.presentToast("Invalid OTP!!",10000)
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpValidationPage');
  }

}
