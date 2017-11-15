import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcceptedItemsPage } from '../accepted-items/accepted-items';

/**
 * Generated class for the UploadDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-details',
  templateUrl: 'upload-details.html',
})
export class UploadDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadDetailsPage');
  }

  
  public acceptItem(){
    this.navCtrl.setRoot(AcceptedItemsPage);
  }

}
