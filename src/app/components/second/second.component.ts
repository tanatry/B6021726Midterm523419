import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    detail: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }
  get profilestatus(){
    return this.productForm.status;
  }
  getproductType(){
    return this.productType;
  }

}
