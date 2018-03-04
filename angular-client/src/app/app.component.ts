import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  msgs: Message[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  showMessage() {
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }
}
