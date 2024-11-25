import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

loginForm! : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        email : ['', Validators.required],
        password : ['', Validators.required]
    })    
  }

  onLogin(){
     if(this.loginForm.invalid) return;
    console.log(this.loginForm.value);
    
  }

  get form(){
   
    return this.loginForm.controls;
  }

}
