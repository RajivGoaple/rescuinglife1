import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UploadDetailsPage} from '../../pages/upload-details/upload-details'
/**
 * Generated class for the UploadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-list',
  templateUrl: 'upload-list.html',
})
export class UploadListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadListPage');
  }

  public showDetails(){
    this.navCtrl.push(UploadDetailsPage);
  }

}
