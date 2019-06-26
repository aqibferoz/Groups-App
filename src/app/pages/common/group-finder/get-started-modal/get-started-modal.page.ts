import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-get-started-modal',
  templateUrl: './get-started-modal.page.html',
  styleUrls: ['./get-started-modal.page.scss'],
})
export class GetStartedModalPage implements OnInit {

  constructor(private navCtrl: NavController, private modal: ModalController) { }

  ngOnInit() {
  }
  close() {
    this.modal.dismiss();
  }
}
