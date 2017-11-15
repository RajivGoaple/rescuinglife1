import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AcceptedItemsPage } from '../accepted-items/accepted-items';

/**
 * Generated class for the UploadItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-item',
  templateUrl: 'upload-item.html',
})
export class UploadItemPage {
firstName:string;
mobileNumber:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) 
  {
    this.storage.get("FirstName").then((val)=>{this.firstName=val; });
     
     this.storage.get("Mobile").then((val)=>{this.mobileNumber=val; });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadItemPage');
  }
  public upload(){ this.navCtrl.setRoot(AcceptedItemsPage);
  }

}
