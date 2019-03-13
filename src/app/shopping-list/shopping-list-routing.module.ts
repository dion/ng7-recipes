import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  /*declarations: [
    ShoppingListComponent
  ]*/
})
export class ShoppingListRoutingModule {}