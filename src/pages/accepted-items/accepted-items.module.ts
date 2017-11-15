import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptedItemsPage } from './accepted-items';

@NgModule({
  declarations: [
    AcceptedItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptedItemsPage),
  ],
})
export class AcceptedItemsPageModule {}
