import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';


import { IonicModule, IonicRouteStrategy, IonApp, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonSlides } from '@ionic/angular';
import { DatePipe } from "@angular/common";
import { IonicStorageModule } from "@ionic/storage";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GlobalVarsService } from './services/globalVars/global-vars.service';
import { VerbgroupsService } from './services/libs/verbgroups/verbgroups.service';
import { ConjugationService } from './services/libs/conjugation/conjugation.service';
import { CurrentViewServiceService } from './services/currentViewService/current-view-service.service';
import { GetStartedModalPage } from './pages/common/group-finder/get-started-modal/get-started-modal.page';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedModalPage
  ],
  entryComponents: [
    GetStartedModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
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
