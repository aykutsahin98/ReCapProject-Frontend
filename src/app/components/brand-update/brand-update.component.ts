import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brands: Brand[] = [];
  brandUpdateForm: FormGroup;
  brandId: number;

  constructor(private brandService: BrandService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['brandId']) {
        this.brandId = parseInt(params['brandId']);
        this.getBrandById(params['brandId']);
      }
    });
    this.createBrandUpdateForm();
  }
  updateBrand() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe(response => {
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
  getBrandById(id: number) {
    this.brandService.getBrandId(id).subscribe(response => {
      this.brands = response.data;
    });
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brandId],
      brandName: ['', Validators.required],
    });
  }
}