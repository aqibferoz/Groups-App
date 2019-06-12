import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerbGroupMenuPage } from './verb-group-menu.page';

const routes: Routes = [
  {
    path: '',
    component: VerbGroupMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerbGroupMenuPage]
})
export class VerbGroupMenuPageModule {}
