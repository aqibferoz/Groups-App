import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescTohavePresentPage } from './desc-tohave-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescTohavePresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescTohavePresentPage]
})
export class DescTohavePresentPageModule {}
