import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable()
export class ShoplistService {
  private shoplist : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];


  ingredientModified = new Subject<void>();
  startedEditing = new Subject<number>();

  constructor() { }

  getShoplist() : Ingredient[]{
    return this.shoplist.slice();
  }

  getIngredient(index: number) {
    return this.shoplist[index];
  }

  setShoplist(ingredients : Ingredient[]){
    this.shoplist = ingredients;
    this.ingredientModified.next();
  }


  addIngredient(ingredient : Ingredient){
    
    this.shoplist.push(ingredient);
    this.ingredientModified.next();

  }

  addIngredientList(ingredients : Ingredient[]){
    this.shoplist.push(...ingredients);
    this.ingredientModified.next();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.shoplist[index] = newIngredient;
    this.ingredientModified.next();
  }

  deleteIngredient(index: number){
    this.shoplist.splice(index, 1);
    this.ingredientModified.next();
  }
}
