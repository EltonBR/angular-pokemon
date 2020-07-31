import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestCache } from './services/request-cache.service';
import { CachingInterceptor } from './services/caching-interceptor.service';
import { SearchDataService } from './services/search-data.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomHeaderModule } from './components/custom-header/custom-header.module';
import { PokemonListModule } from './pages/pokemon-list/pokemon-list.module';
import { PokemonCardDetailsModule } from './pages/pokemon-card-details/pokemon-card-details.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomHeaderModule,
    PokemonListModule,
    PokemonCardDetailsModule
  ],
  providers: [
    SearchDataService,
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
