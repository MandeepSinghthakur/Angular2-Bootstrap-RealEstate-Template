import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { AsideBarComponent} from './asidebar.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,HeaderComponent,AsideBarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
