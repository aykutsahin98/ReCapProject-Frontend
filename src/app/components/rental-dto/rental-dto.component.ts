import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-dto',
  templateUrl: './rental-dto.component.html',
  styleUrls: ['./rental-dto.component.css'],
})
export class RentalDtoComponent implements OnInit {
  rentalDtos: RentalDto[] = [];
  dataLoaded = false;
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentalDtos = response.data;
      this.dataLoaded = true;
    });
  }
}
