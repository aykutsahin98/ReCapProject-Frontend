import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;
  brands: Brand[] = [];
  dataLoaded:boolean=false;
  selectedBrand:Brand;
  brandUpdateForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrand();
  }

  createCarAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ["", Validators.required]
    });
  }
  createForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandId:[this.selectedBrand.brandId,Validators.required],
      brandName:["",Validators.required]
    })
  }
  setSelectedBrand(brand:Brand){
    this.selectedBrand=brand;
    this.createForm();
  }
  getBrand(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands= response.data;
      this.dataLoaded=true;
    })
  }
  deleteBrand(brand:Brand){
    this.brandService.deleteBrand(brand).subscribe(response=>{
      if(response.success){
        this.toastrService.success("Marka Silindi");
        this.getBrand()
      }
    
    })
  }
  updateBrand(){

    if(this.brandUpdateForm.valid){
      let brandModel=Object.assign({},this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe(response=>{
        this.toastrService.success("Marka Güncellendi","Başarılı");
        this.getBrand();
      },responseError=>{
        this.toastrService.error("Bir Hata Oluştu Daha Sonra Tekrar Deneyiniz","Hata");
      })

    }
    else{
      this.toastrService.warning("Marka ismi boş olamaz","Güncellenemedi")
    }
  }

  addBrand() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe(response => {
        this.toastrService.success(response.message,"Marka başarıyla eklendi.")
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