import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ROUTES } from './constants/routes.contants';

const routes: Routes = [
  { path: ROUTES.HOME, component: HomeComponent },
  { path: ROUTES.ABOUT, component: AboutComponent },
  { path: ROUTES.PRICING, component: PricingComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
