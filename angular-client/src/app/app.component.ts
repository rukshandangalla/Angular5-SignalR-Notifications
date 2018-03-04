import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _hubConnection: HubConnection;
  msgs: Message[] = [];

  constructor() { }

  ngOnInit(): void {
    this._hubConnection = new HubConnection('http://localhost:1874/notify');
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
      this.msgs.push({ severity: type, summary: payload });
    });
  }
}
