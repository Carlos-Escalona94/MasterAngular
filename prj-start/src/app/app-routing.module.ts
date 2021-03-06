import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShopListComponent } from "./ShoppingList/shop-list/shop-list.component";
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {path: 'recipes', component: RecipesComponent, 
    children: [{path: '', component: NoRecipeSelectedComponent},
                {path: 'new', component: RecipeEditComponent},
                {path: ':id', component: RecipeDetailComponent},
                {path: ':id/edit', component: RecipeEditComponent}
        ] 
    },
    {path: 'shop-list', component: ShopListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
