import { Component, ViewChild } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';

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
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  @ViewChild(NavController) nav: NavController;

  rootPage: any = GroupFinderPage;

  pages: Array<{ title: string, icon: string, component: any }>;
  constructor(public platform: Platform, private menuCtrl: MenuController,
    private statusBar: StatusBar, private splashScreen: SplashScreen, public currentView: CurrentViewServiceService
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Group Finder', icon: 'search', component: GroupFinderPageModule },
      { title: 'Verb Groups', icon: 'ios-paper', component: VerbGroupMenuPageModule },
      { title: 'Exceptions', icon: 'alert', component: DescExceptionsPresentPageModule },
      { title: 'To have', icon: 'checkmark', component: DescTohavePresentPageModule },
      { title: 'Negative form', icon: 'close-circle', component: DescNegativePresentPageModule },
      { title: 'Cons. gradation & vow. harmony', icon: 'ios-musical-notes', component: DescConsVowPageModule },
      { title: 'Exercises', icon: 'md-book', component: ExercisemenuPageModule },
      { title: 'Conditional', icon: 'ios-paper', component: DescConditionalPresentPageModule },
      { title: 'About', icon: 'information-circle', component: AboutPageModule }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.statusBar.styleDefault();
      // Splashscreen.hide();
      this.splashScreen.hide();

      // let view = this.nav.getActive();
      // let currentRootPage = view.component.name;

      this.nav.getByIndex(0).component.id = 1;
      // console.log(this.nav.getActive().component.id);
      this.platform.backButton.subscribe(() => {

        let activePortal = this.ionicApp._loadingPortal.getActive() ||
          this.ionicApp._modalPortal.getActive() ||
          this.ionicApp._toastPortal.getActive() ||
          this.ionicApp._overlayPortal.getActive();

        let view = this.nav.getActive();
        let currentRootPage = view.component;


        if (activePortal) {
          activePortal.dismiss();
        }
        else if (this.menuCtrl.isOpen()) {
          this.menuCtrl.close();
        }
        else if (this.nav.canGoBack() || view && view.isOverlay) {
          this.nav.pop();
        }
        else if (currentRootPage != this.pages[0].component) { // Could any other page that you consider as your main one
          this.openPage(this.pages[0]);

        }
        else {
          this.platform.exitApp();
        }

        return;

      }, 1);

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.currentView.currentPageTitle= page.title;
    this.nav.setRoot(page.component);
    this.currentView.currentPageTitle = page.title;
    // console.log(this.nav.getByIndex(0));
    if (page.title != 'Exercises') {
      // this.adsAndRating.showAdAfterXSeconds(18)
      //TODO Ad was called here
      // PLEASE ADD THIS LIKE THAT, COMMENTED, IN THE IONIC 4 PORT
      // THIS IS FOR FUTURE REFERENCE FOR ME TO ADD ADS SOMEDAY
    }
  }
}
