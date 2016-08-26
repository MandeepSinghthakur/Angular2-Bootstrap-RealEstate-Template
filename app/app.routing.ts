import { Routes, RouterModule } from '@angular/router';
import { HomeSearchComponent } from './homesearch.component';

const appRoutes: Routes = [
  { path: '', component: HomeSearchComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
