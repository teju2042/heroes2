import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService]
})
export class LoginComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';
  constructor() {
    
  }
  ngOnInit() {
    $(window).click(function () {
        alert('ok');
        });
    }

}
 
