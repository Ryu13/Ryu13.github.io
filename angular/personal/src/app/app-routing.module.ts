import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CosplayPageComponent } from 'src/cosplay/cosplay-page/cosplay-page.component';
import { AboutMePageComponent } from 'src/about/about-me-page/about-me-page.component';
import { GamingPageComponent } from 'src/gaming/gaming-page/gaming-page.component';
import { ContactPageComponent } from 'src/contact/contact-page/contact-page.component';

export interface AppRouteI extends Route {
  label?: string;
}

interface ROUTE_MAP_ENTRYI {
  [key: string]: AppRouteI
}


export const ROUTE_MAP: ROUTE_MAP_ENTRYI  = {
  ROOT: { path: '', pathMatch: 'full', redirectTo: '/home' },
  HOME: { path: 'home', component: AboutMePageComponent, label: 'Home' },
  COSPLAY: { path: 'cosplay', component: CosplayPageComponent, label: 'Cosplay' },
  GAMING: { path: 'gaming', component: GamingPageComponent, label: 'Gaming' },
  CONTACT: { path: 'contact', component: ContactPageComponent, label: 'Contact Me' }
};

const routes: Routes = [
  ROUTE_MAP.ROOT,
  ROUTE_MAP.HOME,
  ROUTE_MAP.COSPLAY,
  ROUTE_MAP.GAMING,
  ROUTE_MAP.CONTACT
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
