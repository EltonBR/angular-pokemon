import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private dataObserver = new Subject();
  getData(): Subject<unknown> {
    return this.dataObserver;
  }
  updateData(data: string): void {
    this.dataObserver.next(data);
  }
}
