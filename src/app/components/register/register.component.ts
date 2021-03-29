import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup

  constructor(private authService:AuthService,private toastrService:ToastrService,private formBuilder:FormBuilder,private localStorageService:LocalStorageService,private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      userName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.success("Kayıt Başarılı",response.message);
        this.localStorageService.setToken('token',response.data.token);
        this.router.navigate(["/"])
      },responseError=>{
        this.toastrService.error("Kayıt Başarısız",responseError.error)
      })
    }else{
      this.toastrService.error("Lütfen Boş Bırakmayınız")
    }
  }
}