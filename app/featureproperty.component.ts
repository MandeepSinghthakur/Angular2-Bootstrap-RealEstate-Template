import { Component } from '@angular/core';
import { AfterViewInit } from 'angular2/core';


@Component({
	selector:'jll-featureproperty',
	templateUrl:'HtmlPartials/featureproperty.component.html'
})

export class FeaturePropertyComponent implements AfterViewInit {
constructor() {
   
  }
  ngAfterViewInit(){
       //here you will have code where component content is ready.
        $('.slider-frop').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: true,
        centerMode: true,
        dots: false,
        centerPadding: '50px',
        responsive: [{
                breakpoint: 480,
                settings: {
                    dots: true
                }
            }]
    });
   } 
}
