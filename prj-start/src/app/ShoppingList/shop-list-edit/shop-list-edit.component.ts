import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoplistService } from '../shoplist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoplistEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoplistService: ShoplistService) { }

  ngOnInit(): void {
    this.subscription = this.shoplistService.startedEditing.subscribe( (index:number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoplistService.getIngredient(index);
      this.shoplistEditForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount

      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode){
      this.shoplistService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoplistService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.shoplistEditForm.reset();
  }

  onDelete(){
    this.shoplistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
