import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ConsoleComponent, ListingComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
