import { Component } from '@angular/core';

@Component({
	selector:'jll-header',
	templateUrl:'HtmlPartials/header.component.html'
})

export class HeaderComponent {
constructor() {
   
  }
  HeaderSearchClick() {
   $('.header__black-linear-bg').toggleClass('header-big');
    $('.header__black-linear-bg').toggleClass('header-small');
    $('.header__black-bg').toggleClass('header-big');
    $('.header__black-bg').toggleClass('header-small');
    $('header').toggleClass('open')
  }
}