import { Component, OnInit } from '@angular/core';

interface InputChangeEventDetail {
  value: string | undefined | null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
