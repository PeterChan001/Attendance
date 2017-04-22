import { Component } from '@angular/core';

import { TabsPage } from '../pages/tabs/tabs.component';

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public rootPage = TabsPage;

  constructor() {
  }
}
