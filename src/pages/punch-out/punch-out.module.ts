import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PunchOutPage } from './punch-out';

@NgModule({
  declarations: [
    PunchOutPage,
  ],
  imports: [
    IonicPageModule.forChild(PunchOutPage),
  ],
})
export class PunchOutPageModule {}
