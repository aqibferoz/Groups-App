import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verb-group-menu',
  templateUrl: './verb-group-menu.page.html',
  styleUrls: ['./verb-group-menu.page.scss'],
})
export class VerbGroupMenuPage implements OnInit {
  group_list: Array<number>;
  
  constructor(private roter:Router) {
    this.group_list=[1,2,3,4,5,6];
  }

  ngOnInit() {
  }
  goTo(number : number) { //go to Exverbgroup with number of the choosen lesson
    switch (number) {
      case  1:
      this.roter.navigate(['group1'])
        // this.navCtrl.push(DescVbGr1Present);
        // this.currentView.currentPageTitle="DescVbGr1Present";
        break;

      case  2:
      this.roter.navigate(['group2'])
        // this.navCtrl.push(DescVbGr2Present);
        // this.currentView.currentPageTitle="DescVbGr2Present";
        break;
      case  3:
      this.roter.navigate(['group3'])
        // this.navCtrl.push(DescVbGr3Present);
        // this.currentView.currentPageTitle="DescVbGr3Present";
        break;
      case 4:
      this.roter.navigate(['group4'])
        // this.navCtrl.push(DescVbGr4Present);
        // this.currentView.currentPageTitle="DescVbGr4Present";
        break;

      case  5:
      this.roter.navigate(['group5'])
        // this.navCtrl.push(DescVbGr5Present);
        // this.currentView.currentPageTitle="DescVbGr5Present";
        break;
      case  6:
      this.roter.navigate(['group6'])
        // this.navCtrl.push(DescVbGr6Present);
        // this.currentView.currentPageTitle="DescVbGr6Present";
        break;
      default:

    }

  }

}
