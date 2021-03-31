import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeComponent } from './mfe.component';
import { Routes, RouterModule } from '@angular/router';

export const MFE_ROUTES: Routes = [
  {
    path: 'mfe',
    component: MfeComponent
  }
];

@NgModule({
  declarations: [MfeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MFE_ROUTES)
  ]
})
export class MfeModule { }
