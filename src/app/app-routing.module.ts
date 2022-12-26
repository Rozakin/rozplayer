import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=>import('./landing/landing.module').then(m=>m.LandingModule)},
  {path: 'hosting', loadChildren: ()=>import('./host/host.module').then(m=>m.HostModule)},
  {path: '', loadChildren: ()=>import('./join/join.module').then(m=>m.JoinModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
