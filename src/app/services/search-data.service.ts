import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private dataObserver = new Subject();
  getData() {
    return this.dataObserver;
  }
  updateData(data: string) {
    this.dataObserver.next(data);
  }
}
