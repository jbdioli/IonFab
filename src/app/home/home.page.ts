import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isFab = true;
  action: string;

  constructor() {}

  onCancel(action: string) {

  }

  onValidate(action: string) {

  }

}
