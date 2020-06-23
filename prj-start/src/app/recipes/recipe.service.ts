import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
// @Injectable({
//     providedIn: 'root'
//   })
export class RecipeService {
    recipesChanged = new Subject<void>();

    private recipes: Recipe[] =[
        new Recipe('A Test Recipe', 'This is simply a test',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
           new Ingredient('Apple', 3), 
           new Ingredient('Sugar', 1), 
           new Ingredient('Flour', 6), 
           new Ingredient('Vinagre', 1), 
        ]),
        new Recipe('Another Test Recipe','This is simply a test',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredient('Chiken',3), 
            new Ingredient('Oil',1), 
            new Ingredient('Flour',6), 
            new Ingredient('Oregan',4),
            new Ingredient('Butter',1), 
         ])
  ];

    constructor() {

    }

    getRecipes() {
        return this.recipes.slice(); // devuelve una copia del array
    }

    getRecipeById(id: number): Recipe {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next();
    }

    updateRecipes(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next();
    }

    deleteRecipe(index: number) {
        this.recipes = this.recipes.splice(index, 1);
        this.recipesChanged.next();
    }


}