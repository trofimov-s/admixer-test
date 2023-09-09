import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    title: 'Admixer | Home',
  },
  {
    path: 'advertisers',
    loadChildren: () =>
      import('./modules/advertisers/advertisers.module').then((m) => m.AdvertisersModule),
    title: 'Admixer | Advertisers',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
