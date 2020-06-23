import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoplistService } from 'src/app/ShoppingList/shoplist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  
  constructor(private recipesService: RecipeService ,private shoplistService: ShoplistService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.recipe = this.recipesService.getRecipeById(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipeById(this.id);
      }
    );
  }

  onAddIngredient() {
    this.shoplistService.addIngredientList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }


  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
