import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors: Color[] = [];
  dataLoaded = false; 
  currentColor: Color;
    
  constructor(private colorService: ColorService,private toastrService:ToastrService ) { }

  ngOnInit(): void {
    this.getColors();
  }

  
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  deleteColor(color:Color){
    this.colorService.deleteColor(color).subscribe(response=>{
      if(response.success){
        this.toastrService.success("Renk Silindi");
        this.getColors()
      }
    
    })
  }
  
  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  CleanCurrentColor(){
    this.getColors();
  }
}