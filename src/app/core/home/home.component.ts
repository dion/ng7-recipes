import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

import { Recipe } from '../../recipes/recipe.model';
import { RecipeService } from '../../recipes/recipe.service';
import { SearchFilterService } from '../search-filter.service';
import { Subscription } from 'rxjs/Subscription';
import { FilterPipe } from '../../filters/filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('divState', [
      state('true', style({
        //'background-color': 'red',
        display: 'block',
        opacity: 1,
        //transform: 'translateX(0)'
      })),
      state('false', style({
        //'background-color': 'blue',
        opacity: 0,
        display: 'none',
        
        //transform: 'translateX(-100px)'
      })),
      transition('false <=> true', animate(0))
      //transition('true <=> false', animate(1300))
      // transition('normal => highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('panelState', [
      state('open', style({
        //'background-color': 'red',
        //opacity: 1,
        transform: 'translateX(0)'
      })),
      state('closed', style({
        //'background-color': 'blue',
        //opacity: 0,
        transform: 'translateX(500px)'
      })),
      transition('open <=> closed', animate(700))
      //transition('true <=> false', animate(1300))
      // transition('normal => highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ])
  ]
})
export class HomeComponent implements OnInit {
  recipes: Recipe[];
  recipe: Recipe;
  isModalOpen = false;
  panelState = 'closed';
  filteredSearch = '';
  private subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private searchFilterService: SearchFilterService) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit() {
    this.searchFilterService.inputChange
      .subscribe(
        (searchFilter: string) => {
          console.log(searchFilter);
          this.filteredSearch = searchFilter;
        }
      );
  }

  onSelectRecipe(index: number) {
    this.isModalOpen = true;
    this.panelState = 'open';
    this.recipe = this.recipeService.getRecipe(index);

    console.log(this.recipe);
  }

  onCloseModal() {
    this.isModalOpen = false;
    this.panelState = 'closed';
    console.log('close modal');
  }

}
