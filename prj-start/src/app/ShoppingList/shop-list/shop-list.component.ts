import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoplistService } from '../shoplist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit, OnDestroy { 
  
  ingredients : Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoplistService : ShoplistService) {

   }

  ngOnInit(): void {
    this.ingredients = this.shoplistService.getShoplist();

    this.igChangeSub = this.shoplistService.ingredientModified.subscribe(
            () => {this.ingredients = this.shoplistService.getShoplist()});
  }

  onEditItem(index: number) {
    this.shoplistService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

}
