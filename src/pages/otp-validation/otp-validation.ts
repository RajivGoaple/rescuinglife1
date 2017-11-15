import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'; 
import { User } from '../../Models/User';
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
public user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public storage: Storage) {
    this.user=navParams.data;
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
     this.storage.set("otpVerified","true");
     this.storage.set("FirstName",this.user.FirstName);
     this.storage.set("LastName",this.user.LastName);
     this.storage.set("Email",this.user.Email);
     this.storage.set("Mobile",this.user.Mobile);
     this.storage.set("Address",this.user.Address);
     this.storage.set("PrefferedLocation",this.user.PrefferedLocation);
     this.storage.set("Type",this.user.Type);
     this.storage.set("OrgnizationName",this.user.OrgnizationName);
     this.storage.set("AboutOrgnization",this.user.AboutOrgnization);
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
