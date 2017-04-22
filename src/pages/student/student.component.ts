import { Component, Input } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-student',
  templateUrl: 'student.component.html'
})
export class StudentPage {
  @Input() private identity: string;

  constructor(
    private alertCtrl: AlertController,
    private geolocation: Geolocation,
  ) {
  }

  showPosition(): void {
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        let alert = this.alertCtrl.create({
          title: '位置',
          subTitle: '经度:' + resp.coords.latitude + ' 纬度:' + resp.coords.longitude,
          buttons: ['OK']
        });
        
        alert.present();
      }
    )
    
  }
}
