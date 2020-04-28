import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private route: Router) { }
  successMessage: string;
  loginForm: FormGroup;
  logModel: loginModel;

  messageValidate = {
    email : {
      required : 'Email Required',
      exist: ''
    },
    password : {
      required : 'Password Required',
    }
  }
  //reg: RegisterModel;


  ngOnInit(): void {
    this.successMessage = ''

    this.logModel = {
      email: '',
      password: '',
      RememberMe: false,
    }

    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password:  ['',Validators.required],
      RememberMe: false
    })
  }

  Login(){


  }
  validateLoginModel() {
   this.logModel.email =  this.loginForm.value.email;
   this.logModel.password =  this.loginForm.value.password;
   this.logModel.RememberMe =  this.loginForm.value.RememberMe;
  }

}
