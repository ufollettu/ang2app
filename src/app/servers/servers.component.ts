import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'test';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 200)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server created Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
