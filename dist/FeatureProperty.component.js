"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FeaturePropertyComponent = (function () {
    function FeaturePropertyComponent() {
    }
    FeaturePropertyComponent.prototype.ngAfterViewInit = function () {
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
    };
    FeaturePropertyComponent = __decorate([
        core_1.Component({
            selector: 'jll-featureproperty',
            templateUrl: 'HtmlPartials/featureproperty.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FeaturePropertyComponent);
    return FeaturePropertyComponent;
}());
exports.FeaturePropertyComponent = FeaturePropertyComponent;
//# sourceMappingURL=featureproperty.component.js.map