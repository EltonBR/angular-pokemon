import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../../services/search-data.service';
import { Router, NavigationEnd } from '@angular/router'; 
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchTerm: string;
  atualRoute: string;

  constructor(private searchDispatcher: SearchDataService, private router: Router) {
    this.atualRoute = router.url;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualRoute = event.url;
      }
    });
  }

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
