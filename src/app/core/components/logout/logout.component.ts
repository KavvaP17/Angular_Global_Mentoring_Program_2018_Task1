import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  public user: User;
  public title: string = "logout";

  constructor() { }

  ngOnInit() {
    this.user = new User(1, 'Aliaksandr', 'Kamianchuk');
  }

}
