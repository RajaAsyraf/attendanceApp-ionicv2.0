import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PunchInService } from '../../services/punchIn.service';
import { PunchOutPage } from '../punch-out/punch-out';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {

  public currentTime: String = new Date().toISOString();
  notes: {title: string}[] = [];
  
  constructor(public navCtrl: NavController, private punchInService: PunchInService) {
    
  }

  ionViewWillEnter(){
    this.notes = this.punchInService.getNotes();
  }

  onPunchIn(value: {title:string}){
    this.punchInService.addNote(value);
    this.navCtrl.push(PunchOutPage);
  }

}
