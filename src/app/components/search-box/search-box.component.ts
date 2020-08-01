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
        if (this.atualRoute === '/') {
          this.searchTerm = '';
        }
      }
    });
  }

  ngOnInit(): void {
  }

  dispatchSearch(): void {
    this.searchDispatcher.updateData(this.searchTerm);
  }

  clear(): void {
    this.searchTerm = '';
    this.dispatchSearch();
  }

}
