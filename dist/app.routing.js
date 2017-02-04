"use strict";
var router_1 = require('@angular/router');
var homesearch_component_1 = require('./homesearch.component');
var searchresults_component_1 = require('./searchresults.component');
var appRoutes = [
    { path: '', component: homesearch_component_1.HomeSearchComponent },
    { path: 'search', component: searchresults_component_1.SearchResultsComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map