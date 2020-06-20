import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-watcher',
  templateUrl: './username-watcher.component.html',
  styleUrls: ['./username-watcher.component.css']
})
export class UsernameWatcherComponent implements OnInit {
  username : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  IsUserNameEmpty(){
    return this.username == '';
  }

}
