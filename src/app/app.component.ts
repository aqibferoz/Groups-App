import { Component, ViewChild } from '@angular/core';

import { Platform, NavController, MenuController} from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GroupFinderPage } from './pages/common/group-finder/group-finder.page';
import { CurrentViewServiceService } from './services/currentViewService/current-view-service.service';
import { GroupFinderPageModule } from './pages/common/group-finder/group-finder.module';
import { VerbGroupMenuPageModule } from './pages/verb-group-menu/verb-group-menu.module';
import { DescExceptionsPresentPageModule } from './pages/desc-present/desc-exceptions-present/desc-exceptions-present.module';
import { DescTohavePresentPageModule } from './pages/desc-present/desc-tohave-present/desc-tohave-present.module';
import { DescNegativePresentPageModule } from './pages/desc-present/desc-negative-present/desc-negative-present.module';
import { DescConsVowPageModule } from './pages/common/desc-cons-vow/desc-cons-vow.module';
import { ExercisemenuPageModule } from './pages/exercisemenu/exercisemenu.module';
import { DescConditionalPresentPageModule } from './pages/desc-present/desc-conditional-present/desc-conditional-present.module';
import { AboutPageModule } from './pages/common/about/about.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Group Finder',
      url: '/group-finder',
      icon: 'search'
    },
    {
      title: 'Verbs Groups',
      url: '/verb-group-menu',
      icon: 'copy'
    } ,
    {
      title: 'Exceptions',
      url: '/exceptions',
      icon: 'alert'
    } ,
    {
      title: 'To have',
      url: '/tohave',
      icon: 'checkmark-circle'
    } ,
    {
      title: 'Negative Form',
      url: '/negativeform',
      icon: 'close-circle'
    },
    {
      title: 'Cons. gradation & vow. harmony',
      url: '/constgradation',
      icon: 'musical-notes'
    } ,
    {
      title: 'Exercises',
      url: '/exercises',
      icon: 'book'
    } ,
    {
      title: 'Conditional',
      url: '/conditional',
      icon: 'photos'
    } ,
    {
      title: 'About',
      url: '/about',
      icon: 'md-information-circle'
    } 
  ];

  @ViewChild(NavController) nav: NavController;

  rootPage: any = GroupFinderPage;

  pages: Array<{ title: string, icon: string, component: any }>;
  constructor(
  ) {
    // this.initializeApp();

    // this.pages = [
    //   { title: 'Group Finder', icon: 'search', component: GroupFinderPageModule },
    //   { title: 'Verb Groups', icon: 'ios-paper', component: VerbGroupMenuPageModule },
    //   { title: 'Exceptions', icon: 'alert', component: DescExceptionsPresentPageModule },
    //   { title: 'To have', icon: 'checkmark', component: DescTohavePresentPageModule },
    //   { title: 'Negative form', icon: 'close-circle', component: DescNegativePresentPageModule },
    //   { title: 'Cons. gradation & vow. harmony', icon: 'ios-musical-notes', component: DescConsVowPageModule },
    //   { title: 'Exercises', icon: 'md-book', component: ExercisemenuPageModule },
    //   { title: 'Conditional', icon: 'ios-paper', component: DescConditionalPresentPageModule },
    //   { title: 'About', icon: 'information-circle', component: AboutPageModule }

    // ];

  }

  

  
}
