import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescVbGroup4PresentPage } from './desc-vb-group4-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescVbGroup4PresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescVbGroup4PresentPage]
})
export class DescVbGroup4PresentPageModule {}
