import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetStartedModalPage } from './get-started-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GetStartedModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetStartedModalPage]
})
export class GetStartedModalPageModule {}
