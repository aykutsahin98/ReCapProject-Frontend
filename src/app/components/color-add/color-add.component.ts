import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup;
  colors: Color[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ["", Validators.required]
    });
  }

  addColor() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      this.colorService.addColor(colorModel).subscribe(response => {
        this.toastrService.success(response.message,"Renk başarıyla eklendi.")
        this.router.navigate(['/cars']);
        this.toastrService.info("Araba sayfasına yönlendiriliyorsunuz.")
      }, responseError => 
      {
        if(responseError.error.ValidationErrors.length > 0){
          for(let i = 0; i<responseError.error.ValidationErrors.length; i++){
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage
              ,"Doğrulama Hatası.");
          }      
        }
      })
    } else {
      this.toastrService.warning("Formu eksiksiz doldurmalısınız.");
    }

  }
}