import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 rental:Rental;
 carDetails:Car[];
 car:Car;
 amountPayment:number=0;
  constructor(private activatedRoute:ActivatedRoute,private cardetailService:CarDetailService,
    private router:Router,private toastrService:ToastrService,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>
      {
        
        if(params["rental"])
        {
          this.rental = JSON.parse(params['rental']);
        this.getRental();
        this.getCarDetail();
        }
      })
  }
  getRental(){
    console.log(this.rental);
  }

  getCarDetail(){
    this.cardetailService.getCarDetail(this.rental.carId).subscribe(reponse=>
      {
        this.carDetails=reponse.data;
        this.paymentCalculator();
      })
    }

  paymentCalculator()
  {
    
    if(this.rental.returnDate!=null)
    {
      var date1=new Date(this.rental.returnDate.toString());
      var date2=new Date(this.rental.rentDate.toString());
      var difference = date1.getTime() - date2.getTime();

      var numberOfDays = Math.ceil(difference / (1000 * 3600 * 24)); 

      this.amountPayment = numberOfDays;
      if(this.amountPayment <= 0){
        this.router.navigate(['/cars']);
        this.toastrService.error("Araç listesine yönlendiriliyorsunuz", "Hatalı işlem");
      }
    }
    
  }

  creditPayment()
  {
    this.paymentService.creditPayment(this.rental,this.amountPayment).subscribe(response=>
      {
        this.router.navigate(['/cars']);
        this.toastrService.success(response.message.toString(), "İşlem Başarılı");
      })
  }
}
