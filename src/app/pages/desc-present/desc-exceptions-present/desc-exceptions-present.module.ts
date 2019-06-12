import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescExceptionsPresentPage } from './desc-exceptions-present.page';

const routes: Routes = [
  {
    path: '',
    component: DescExceptionsPresentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescExceptionsPresentPage]
})
export class DescExceptionsPresentPageModule {}
