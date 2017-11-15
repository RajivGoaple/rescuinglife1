import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UploadDetailsPage} from '../upload-details/upload-details'
/**
 * Generated class for the AcceptedItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accepted-items',
  templateUrl: 'accepted-items.html',
})
export class AcceptedItemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptedItemsPage');
  }

  public showDetails(){
    this.navCtrl.push(UploadDetailsPage);
  }

}
