import { Routes, RouterModule } from '@angular/router';
import { HomeSearchComponent } from './homesearch.component';
import { SearchResultsComponent } from './searchresults.component';

const appRoutes: Routes = [
  { path: '', component: HomeSearchComponent },
  { path: 'search', component: SearchResultsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
