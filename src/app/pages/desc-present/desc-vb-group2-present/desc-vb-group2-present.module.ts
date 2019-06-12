import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescVbGroup2PresentPage } from './desc-vb-group2-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescVbGroup2PresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescVbGroup2PresentPage]
})
export class DescVbGroup2PresentPageModule {}
