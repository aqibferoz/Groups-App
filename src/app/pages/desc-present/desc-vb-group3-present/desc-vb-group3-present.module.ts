import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescVbGroup3PresentPage } from './desc-vb-group3-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescVbGroup3PresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescVbGroup3PresentPage]
})
export class DescVbGroup3PresentPageModule {}
