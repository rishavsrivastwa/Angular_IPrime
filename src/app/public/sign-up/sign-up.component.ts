import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  get usernameControl() {
      return this.form.get('username') as FormControl;
    }
  get passwordControl() {
      return this.form.get('password') as FormControl;
    }
  get emailControl() {
      return this.form.get('email') as FormControl;
    }
  constructor( private fb: FormBuilder,
    private authService: FirebaseAuthService,
    private snackBar: MatSnackBar,
    private router:Router) { }
  ngOnInit(): void {
      this.generateForm();
    }
   generateForm(){
     this.form = this.fb.group({
       username:["",[Validators.required,Validators.minLength(6)]],
       email:["",[Validators.required,Validators.email]],
       password:["",[Validators.required,Validators.minLength(6)]],
     });
   }
  
    onSubmit() {
    let email=this.form.value.email;
    let password=this.form.value.password;
    let username= this.form.value.username;
    this.authService.signUp(email,password,username)
    

    }

  

}


