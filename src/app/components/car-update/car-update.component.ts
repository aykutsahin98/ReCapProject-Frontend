import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
  colors:Color[];
  brands:Brand[];
  brandId:number;
  colorId:number;
  constructor(
    private brandService:BrandService,
    private colorService:ColorService,
    private carService:CarService,
    private toastr:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.createdUpdateForm();
      if(params["carId"]){
        this.getColors();
        this.getBrands();
        this.getCar(params["carId"]);
      }
    })
  
  }
  createdUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      id:[""],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required]
    })
  }

  getCar(carId:number){
    this.carService.getCarById(carId).subscribe(response=> {
      this.carUpdateForm.get("id")?.setValue(response.data.carId),
      this.carUpdateForm.get("brandId")?.setValue(response.data.brandId),
      this.carUpdateForm.get("colorId")?.setValue(response.data.colorId),
      this.carUpdateForm.get("dailyPrice")?.setValue(response.data.dailyPrice),
      this.carUpdateForm.get("description")?.setValue(response.data.description),
      this.carUpdateForm.get("modelYear")?.setValue(response.data.modelYear)
    });
  }
  getColors(){
    this.colorService.getColors().subscribe(response=> {this.colors = response.data });
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=> {this.brands = response.data})
  }


  update(){
    if(this.carUpdateForm.valid){
      let carUpdateModel = Object.assign({},this.carUpdateForm.value);
      this.carService.updateCar(carUpdateModel).subscribe(response=> {
        this.toastr.success(response.message)
      },responseError=> {
        if(responseError.error.Errors.length>0){
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastr.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")             
            }
        }
      })     
    }else{
      this.toastr.error("Doğrulama Hatası!");
    }
    
  }

}