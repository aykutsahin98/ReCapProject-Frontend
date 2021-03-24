import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  customerId:number;
  customers:Customer[];
  rentDate:Date;
  returnDate:Date;
  @Input() car:Car;

  constructor(private customerService:CustomerService,private activatedRoute:ActivatedRoute,private route:Router,private rentalService:RentalService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers()
  {
    this.customerService.getCustomer().subscribe(response=>
      {
        this.customers=response.data
      })
  }
  
  getMinDate(){
    var today  = new Date();
    //min="1980-01-01"
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }

  addRentals()
  {
    let rental:Rental = 
    {
      rentDate :this.rentDate,
      returnDate:this.returnDate,
      carId:this.car.carId,
      customerId: parseInt(this.customerId.toString())
    }
    this.route.navigate(['/payment/', JSON.stringify(rental)]);
    this.toastrService.info("Ödeme sayfasına yönlendiriliyorsunuz...", "Ödeme İşlemleri");
  }
}