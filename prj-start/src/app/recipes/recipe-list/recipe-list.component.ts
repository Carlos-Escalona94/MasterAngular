import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  private recipeService: RecipeService;
  subscription: Subscription;

  constructor(recipeService: RecipeService, private router: Router) { 
    this.recipeService = recipeService;
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.subscription = this.recipeService.recipesChanged.subscribe(( ) => {
      this.recipes = this.recipeService.getRecipes();
    });
  }

  onCreateRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
