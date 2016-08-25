import { Component } from '@angular/core';

@Component({
	selector:'jll-asidebar',
	templateUrl:'HtmlPartials/asidebar.component.html'
})

export class AsideBarComponent {
constructor() {
   
  }
  closeSideBar(){
  $('.sidenav').removeClass('nav-open');
  }
  
}