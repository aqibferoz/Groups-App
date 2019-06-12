import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescGroupsSumPage } from './desc-groups-sum.page';

const routes: Routes = [
  {
    path: '',
    component: DescGroupsSumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescGroupsSumPage]
})
export class DescGroupsSumPageModule {}
