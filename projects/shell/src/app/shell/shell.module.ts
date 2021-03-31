import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { Routes, RouterModule } from '@angular/router';

export const SHELL_ROUTES: Routes = [
  {
    path: 'shell',
    component: ShellComponent
  }
];

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SHELL_ROUTES)
  ]
})
export class ShellModule { }
