import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm: FormGroup|any;
  constructor(private router: Router, private formBuilder:FormBuilder,private auth:FirebaseAuthService) { 
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['',Validators.required]

    })
  }

  get email(){ return this.loginForm.get("email");}
  get password(){ return this.loginForm.get("password");}

  ngOnInit(): void {}
  
  //Reactive Approach
  
  loginReactiveApproach():void{
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    console.log(email,password);
    this.auth.signIn(email,password);
    this.loginForm={
      email:'',
      password:''
    }


  }

}
