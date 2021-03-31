import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation/src';
// follow https://www.angulararchitects.io/aktuelles/dynamic-module-federation-with-angular/
// to convert it into dynamic module loading via config
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'shell',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      remoteName: 'shell',
      exposedModule: './Module'
      }).then(m => m.ShellModule)
  },
  {
    path: 'mfe',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4000/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Module'
    }).then(m => m.MfeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
