import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { AsideBarComponent} from './asidebar.component';
import { HomeSearchComponent } from './homesearch.component';
import { FeaturePropertyComponent } from './featureproperty.component';

@NgModule({
  imports:      [ BrowserModule ,routing],
  declarations: [ AppComponent,HeaderComponent,AsideBarComponent,HomeSearchComponent,FeaturePropertyComponent],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
