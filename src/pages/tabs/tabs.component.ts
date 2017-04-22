import { Component, ViewChild, OnInit, Inject } from '@angular/core';

import { Tabs } from "ionic-angular";
import { Storage } from "@ionic/storage";

import { UserService } from "../../core/user.service";

import { UserPage } from '../user/user.component';
import { StudentPage } from '../student/student.component';
import { TeacherPage } from "../teacher/teacher.component";

@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsPage implements OnInit {
  @ViewChild('appTabs') private tabs: Tabs;
  public tab1Root;
  public tab2Root;

  constructor(
    private storage: Storage,
    private userService: UserService
  ) {
    this.tab2Root = UserPage;
  }

  ngOnInit() {
    this.storage.get('identity').then(
      (value) => {
        if(value == null) {
          this.tabs.select(1);
          this.userService.identity = '';
        }
        else {
          this.userService.identity = value;
          if(value == 'student') {
            this.tab1Root = StudentPage;
          }
          else {
            this.tab1Root = TeacherPage;
          }
        }
      }
    );
  }

  tabChanged(): void {
    if(this.userService.identity == '') {
      this.tabs.select(1);
    }
  }
}
