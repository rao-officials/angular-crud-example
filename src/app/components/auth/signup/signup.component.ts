import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private fb : FormBuilder) { }

  signupForm! :  FormGroup;

  ngOnInit(): void {
    this.signupForm = this.fb.group({
        name : ['', Validators.required],
        email : ['', Validators.required],
        password : ['', Validators.required]
    })    
  }

  onSignup(){
     if(this.signupForm.invalid) return;
     const {email, password} = this.signupForm.value;
     this.authService.signup(email, password);
    console.log(this.signupForm.value);
    
  }

  get form(){
    return this.signupForm.controls;
  }
}
