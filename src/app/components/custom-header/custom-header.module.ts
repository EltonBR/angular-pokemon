import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header.component';
import { SearchBoxModule } from '../search-box/search-box.module';


@NgModule({
  declarations: [CustomHeaderComponent],
  imports: [
    CommonModule,
    SearchBoxModule
  ],
  exports: [
    CustomHeaderComponent
  ]
})
export class CustomHeaderModule { }
