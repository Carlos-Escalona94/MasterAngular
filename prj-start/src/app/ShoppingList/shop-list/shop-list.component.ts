import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
ingredients : Ingredient[]= [
  new Ingredient('Apples', 5),
  new Ingredient('Tomatoes', 10)
];

  constructor() { }

  ngOnInit(): void {
  }

}
