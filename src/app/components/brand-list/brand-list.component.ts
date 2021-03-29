import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = [];
  dataLoaded = false; 
  currentBrand: Brand;
    
  constructor(private brandService: BrandService,private toastrService:ToastrService ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  deleteBrand(brand:Brand){
    this.brandService.deleteBrand(brand).subscribe(response=>{
      if(response.success){
        this.toastrService.success("Marka Silindi");
        this.getBrands()
      }
    
    })
  }
  
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  CleanCurrentBrand(){
    this.getBrands();
  }
}