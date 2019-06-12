import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescVbGroup1PresentPage } from './desc-vb-group1-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescVbGroup1PresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescVbGroup1PresentPage]
})
export class DescVbGroup1PresentPageModule {}
