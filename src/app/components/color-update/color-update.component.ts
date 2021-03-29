import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colors: Color[] = [];
  colorUpdateForm: FormGroup;
  colorId: number;

  constructor(private colorService: ColorService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['colorId']) {
        this.colorId = parseInt(params['colorId']);
        this.getColorById(params['colorId']);
      }
    });
    this.createBrandUpdateForm();
  }
  updateColor() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.updateColor(colorModel).subscribe(response => {
        this.toastrService.success(response.message, 'Başarılı');
      }, responseError => {
        if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i<responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage
              ,"Doğrulama Hatası.");
          }
        }
      });
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik!', 'Hata');
    }
  }
  getColorById(id: number) {
    this.colorService.getColorId(id).subscribe(response => {
      this.colors = response.data;
    });
  }

  createBrandUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorId: [this.colorId],
      colorName: ['', Validators.required],
    });
  }
}