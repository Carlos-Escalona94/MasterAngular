import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipe: Recipe;
  @Input() index: number;
  
  constructor(private recipeService : RecipeService, private router : Router) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.router.navigate(['/recipes', this.index]);
  }
  

}