import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { AsideBarComponent} from './asidebar.component';
import { HomeSearchComponent } from './homesearch.component';

@NgModule({
  imports:      [ BrowserModule ,routing],
  declarations: [ AppComponent,HeaderComponent,AsideBarComponent,HomeSearchComponent],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
