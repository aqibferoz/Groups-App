import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescVbGroup5PresentPage } from './desc-vb-group5-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescVbGroup5PresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescVbGroup5PresentPage]
})
export class DescVbGroup5PresentPageModule {}
