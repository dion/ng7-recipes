import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public directions: Array<string>;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, directions: Array<string>, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.directions = directions;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
