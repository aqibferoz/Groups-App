import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';


import { IonicModule, IonicRouteStrategy, IonApp, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonSlides } from '@ionic/angular';
import { DatePipe } from "@angular/common";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Pages for Declarations
import { DescNegativePresentPage } from './pages/desc-present/desc-negative-present/desc-negative-present.page';
import { DescConditionalPresentPage } from './pages/desc-present/desc-conditional-present/desc-conditional-present.page';
import { DescTohavePresentPage } from './pages/desc-present/desc-tohave-present/desc-tohave-present.page';
import { DescExceptionsPresentPage } from './pages/desc-present/desc-exceptions-present/desc-exceptions-present.page';
import { DescVbGroup1PresentPage } from './pages/desc-present/desc-vb-group1-present/desc-vb-group1-present.page';
import { DescVbGroup2PresentPage } from './pages/desc-present/desc-vb-group2-present/desc-vb-group2-present.page';
import { DescVbGroup3PresentPage } from './pages/desc-present/desc-vb-group3-present/desc-vb-group3-present.page';
import { DescVbGroup4PresentPage } from './pages/desc-present/desc-vb-group4-present/desc-vb-group4-present.page';
import { DescVbGroup5PresentPage } from './pages/desc-present/desc-vb-group5-present/desc-vb-group5-present.page';
import { DescVbGroup6PresentPage } from './pages/desc-present/desc-vb-group6-present/desc-vb-group6-present.page';
import { DescConsVowPage } from './pages/common/desc-cons-vow/desc-cons-vow.page';
import { ExverbgroupPage } from './pages/exverbgroup/exverbgroup.page';
import { ExconjugPage } from './pages/exconjug/exconjug.page';
import { GroupFinderPage } from './pages/common/group-finder/group-finder.page';
import { AboutPage } from './pages/common/about/about.page';
import { GetStartedModalPage } from './pages/common/get-started-modal/get-started-modal.page';
import { ExercisemenuPage } from './pages/exercisemenu/exercisemenu.page';
import { VerbGroupMenuPage } from './pages/verb-group-menu/verb-group-menu.page';
import { DescGroupsSumPage } from './pages/common/desc-groups-sum/desc-groups-sum.page';
import { FormsModule } from '@angular/forms';
import { GlobalVarsService } from './services/globalVars/global-vars.service';
import { VerbgroupsService } from './services/libs/verbgroups/verbgroups.service';
import { ConjugationService } from './services/libs/conjugation/conjugation.service';
import { CurrentViewServiceService } from './services/currentViewService/current-view-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DescNegativePresentPage,
    DescConditionalPresentPage,
    DescTohavePresentPage,
    DescExceptionsPresentPage,
    DescVbGroup1PresentPage,
    DescVbGroup2PresentPage,
    DescVbGroup3PresentPage,
    DescVbGroup4PresentPage,
    DescVbGroup5PresentPage,
    DescVbGroup6PresentPage,
    DescConsVowPage,
    ExverbgroupPage,
    ExconjugPage,
    GroupFinderPage,
    AboutPage,
    GetStartedModalPage,
    DescGroupsSumPage,
    ExercisemenuPage,
    VerbGroupMenuPage],
  entryComponents: [
    DescNegativePresentPage,
    DescConditionalPresentPage,
    DescTohavePresentPage,
    DescExceptionsPresentPage,
    DescVbGroup1PresentPage,
    DescVbGroup2PresentPage,
    DescVbGroup3PresentPage,
    DescVbGroup4PresentPage,
    DescVbGroup5PresentPage,
    DescVbGroup6PresentPage,
    DescConsVowPage,
    ExverbgroupPage,
    ExconjugPage,
    GroupFinderPage,
    AboutPage,
    GetStartedModalPage,
    DescGroupsSumPage,
    ExercisemenuPage,
    VerbGroupMenuPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalVarsService,
    VerbgroupsService,
    ConjugationService,
    IonSlides,
    [DatePipe],
    IonApp,
    // IonRouterOutlet,
    // ChangeDetectorRef,
    // [Nav],
    CurrentViewServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
