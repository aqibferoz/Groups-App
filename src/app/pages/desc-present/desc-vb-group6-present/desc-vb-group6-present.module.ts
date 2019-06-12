import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescVbGroup6PresentPage } from './desc-vb-group6-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescVbGroup6PresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescVbGroup6PresentPage]
})
export class DescVbGroup6PresentPageModule {}
