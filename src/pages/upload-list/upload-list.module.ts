import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadListPage } from './upload-list';

@NgModule({
  declarations: [
    UploadListPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadListPage),
  ],
})
export class UploadListPageModule {}
