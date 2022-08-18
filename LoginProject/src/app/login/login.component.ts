import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      name: ['', Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    alert("username is "+this.loginForm.value.name);
    alert("password is "+this.loginForm.value.password);



   
    // const user = (values: any) => {
    //   {
    //     // return a.email === this.loginForm.value.email &&
    //     //   a.password === this.loginForm.value.password
    //     return this.loginForm.value.email === "reshma" &&
    //       this.loginForm.value.password === "12345"
    //   };
    // }
    //   if (user){
    //     alert("Login Success");
    //     this.loginForm.reset();
       
    //   }else{
    //     alert("User not found!!");
    //   }
    // }
  }

}
