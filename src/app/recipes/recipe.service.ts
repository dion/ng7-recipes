import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Perfect Latte',
      'A dreamy flatwhite latte!',
      ['just make it'],
      'assets/images/dreamy-flatwhite-coffee-with-perfect-latte-art-2-768x1152.jpg',
      [
        new Ingredient('Coffee', 1),
        new Ingredient('Milk', 20)
      ]),
    new Recipe('Bruschetta with Tomato and Basil',
      'Crunchy and refreshing snack',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/rustic-bread-with-tomatoes-and-basil.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
    new Recipe('Fresh Lemonade',
      'This is a very refreshing drink!',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/fresh-lemonade-with-herbs.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
    new Recipe('Cupcake with fresh cherries',
      'This is a very refreshing drink!',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/cupcake-with-cherries.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
    new Recipe('Cheesey Pizza with Pepperoni',
      'Cheesy Goodness',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/pizza.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
    new Recipe('Simple Honey Pie Crust',
      'Pie crust goodness',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/honey-pie-crust.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
    new Recipe('Poached Eggs with Bacon on Toasted Bread',
      'Pie crust goodness',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/delicious-poached-eggs-with-bacon-on-a-toasted-bread.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
    new Recipe('Fresh Strawberry Platter',
      'Pie crust goodness',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/fresh-strawberry-platter.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
    new Recipe('Chicken and Spanish Rice',
      'Pie crust goodness',
      [
        'In a small saucepan, combine sugar and 1 cup water. Bring to boil and stir to dissolve sugar. Allow to cool to room temperature, then cover and refrigerate until chilled.',
        'Remove seeds from lemon juice, but leave pulp. In pitcher, stir together chilled syrup, lemon juice and remaining 7 cups water.'
      ],
      'assets/images/chicken-and-rice.jpg',
      [
        new Ingredient('3/4 cups white sugar', 1),
        new Ingredient('1/2 cups lemon juice', 1),
        new Ingredient('8 cups of water', 8),
      ]),
  
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
