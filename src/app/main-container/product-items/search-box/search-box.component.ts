import { Component } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  searchText: string = ''

  updateSearchText(event:any){
    this.searchText = event.target.value
  }
}
