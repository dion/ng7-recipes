import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {
  inputChange = new Subject<string>();

  constructor() { }

  onUpdate(searchFilter: string) {
    this.inputChange.next(searchFilter);
  }
}
