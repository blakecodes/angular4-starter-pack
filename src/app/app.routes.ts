import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
