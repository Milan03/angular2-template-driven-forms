import { Component, OnInit } from '@angular/core';

import { User } from '../models/signup.interface';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  user: User = {
    name: '',
    account: {
      email: '',
      confirm: ''
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
