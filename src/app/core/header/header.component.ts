import { Component, ViewEncapsulation } from '@angular/core';
//import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Subject } from 'rxjs/Subject';
import { SearchFilterService } from '../search-filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
//  encapsulation : ViewEncapsulation.None
})
export class HeaderComponent {
  //filteredSearch: string = '';
  
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router,
              private searchFilterService: SearchFilterService) {}
  
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
          //console.log(response.type === HttpEventType.Sent);
        }
      );
  }

  onFetchData() {
    //console.log('fetching data');
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onChange(event) {
    this.searchFilterService.onUpdate(event.target.value);
  }
}
