import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(private searchDispatcher: SearchDataService) { }
  searchTerm: string;
  ngOnInit(): void {
  }

  dispatchSearch() {
    this.searchDispatcher.updateData(this.searchTerm)
  }

  clear() {
    this.searchTerm = '';
    this.dispatchSearch();
  }

}
