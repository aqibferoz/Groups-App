import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {DescVbGr1Present} from "../../pages/desc-present/desc-vb-group1-present";
import {DescVbGr6Present} from "../../pages/desc_present/desc_vb_group6_present";
import {DescVbGr5Present} from "../../pages/desc_present/desc_vb_group5_present";
import {DescVbGr4Present} from "../../pages/desc_present/desc_vb_group4_present";
import {DescVbGr3Present} from "../../pages/desc_present/desc_vb_group3_present";
import {DescVbGr2Present} from "../../pages/desc_present/desc_vb_group2_present";
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalCtrl: ModalController) {

  }

  chooseModal(number){
      let modal;
      switch (number) {

          case  1:
               modal = this.modalCtrl.create(DescVbGr1Present);
              modal.present();
              break;
          case  2:
               modal = this.modalCtrl.create(DescVbGr2Present);
              modal.present();
              break;
          case  3:
               modal = this.modalCtrl.create(DescVbGr3Present);
              modal.present();
              break;
          case 4:
               modal = this.modalCtrl.create(DescVbGr4Present);
              modal.present();

              break;
          case  5:
               modal = this.modalCtrl.create(DescVbGr5Present);
              modal.present();
              break;
          case  6:
               modal = this.modalCtrl.create(DescVbGr6Present);
              modal.present();
              break;
          default:

      }
  }

  // tomodal(page) {
  //     let modal = this.modalCtrl.create(DescVbGr1Present);
  //     modal.present();
  // }


}
