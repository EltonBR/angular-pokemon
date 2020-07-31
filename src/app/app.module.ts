import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomHeaderModule } from './components/custom-header/custom-header.module';
import { PokemonListModule } from './components/pokemon-list/pokemon-list.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchDataService } from './services/search-data.service';

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
    PokemonListModule
  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
