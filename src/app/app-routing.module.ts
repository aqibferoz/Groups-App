import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'group-finder',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'common', loadChildren: './pages/common/common.module#CommonPageModule' },

  { path: 'desc-present', loadChildren: './pages/desc-present/desc-present.module#DescPresentPageModule' },

  { path: 'exconjug/:id', loadChildren: './pages/exconjug/exconjug.module#ExconjugPageModule' },

  { path: 'exercisemenu', loadChildren: './pages/exercisemenu/exercisemenu.module#ExercisemenuPageModule' },
  
  { path: 'exverbgroup/:id', loadChildren: './pages/exverbgroup/exverbgroup.module#ExverbgroupPageModule' },

  { path: 'verb-group-menu', loadChildren: './pages/verb-group-menu/verb-group-menu.module#VerbGroupMenuPageModule' },

  { path: 'about', loadChildren: './pages/common/about/about.module#AboutPageModule' },

  { path: 'desc-cons-vow', loadChildren: './pages/common/desc-cons-vow/desc-cons-vow.module#DescConsVowPageModule' },

  { path: 'desc-groups-sum', loadChildren: './pages/common/desc-groups-sum/desc-groups-sum.module#DescGroupsSumPageModule' },
  
  { path: 'group-finder',
   loadChildren: './pages/common/group-finder/group-finder.module#GroupFinderPageModule' },

  { path: 'desc-conditional-present', loadChildren: './pages/desc-present/desc-conditional-present/desc-conditional-present.module#DescConditionalPresentPageModule' },
  
  { path: 'desc-exceptions-present', loadChildren: './pages/desc-present/desc-exceptions-present/desc-exceptions-present.module#DescExceptionsPresentPageModule' },
  
  { path: 'desc-negative-present', loadChildren: './pages/desc-present/desc-negative-present/desc-negative-present.module#DescNegativePresentPageModule' },
  
  { path: 'desc-tohave-present', loadChildren: './pages/desc-present/desc-tohave-present/desc-tohave-present.module#DescTohavePresentPageModule' },
  
  { path: 'desc-vb-group1-present', loadChildren: './pages/desc-present/desc-vb-group1-present/desc-vb-group1-present.module#DescVbGroup1PresentPageModule' },
  
  { path: 'desc-vb-group2-present', loadChildren: './pages/desc-present/desc-vb-group2-present/desc-vb-group2-present.module#DescVbGroup2PresentPageModule' },
  
  { path: 'desc-vb-group3-present', loadChildren: './pages/desc-present/desc-vb-group3-present/desc-vb-group3-present.module#DescVbGroup3PresentPageModule' },
  
  { path: 'desc-vb-group4-present', loadChildren: './pages/desc-present/desc-vb-group4-present/desc-vb-group4-present.module#DescVbGroup4PresentPageModule' },
  
  { path: 'desc-vb-group5-present', loadChildren: './pages/desc-present/desc-vb-group5-present/desc-vb-group5-present.module#DescVbGroup5PresentPageModule' },
  
  { path: 'desc-vb-group6-present', loadChildren: './pages/desc-present/desc-vb-group6-present/desc-vb-group6-present.module#DescVbGroup6PresentPageModule' },

  { path: 'exceptions', loadChildren: './pages/common/exceptions/exceptions.module#ExceptionsPageModule' },

  // { path: 'toHave', loadChildren: './pages/common/toHave/toHave.module#toHavePageModule' },
  { path: 'negativeform', loadChildren: './pages/common/negativeform/negativeform.module#NegativeformPageModule' },
  { path: 'conditional', loadChildren: './pages/common/conditional/conditional.module#ConditionalPageModule' },
  { path: 'constgradation', loadChildren: './pages/common/constgradation/constgradation.module#ConstgradationPageModule' },
  { path: 'tohave', loadChildren: './pages/common/tohave/tohave.module#TohavePageModule' },
  { path: 'group1', loadChildren: './pages/verb-group-menu/group1/group1.module#Group1PageModule' },
  { path: 'group2', loadChildren: './pages/verb-group-menu/group2/group2.module#Group2PageModule' },
  { path: 'group3', loadChildren: './pages/verb-group-menu/group3/group3.module#Group3PageModule' },
  { path: 'group4', loadChildren: './pages/verb-group-menu/group4/group4.module#Group4PageModule' },
  { path: 'group5', loadChildren: './pages/verb-group-menu/group5/group5.module#Group5PageModule' },
  { path: 'group6', loadChildren: './pages/verb-group-menu/group6/group6.module#Group6PageModule' },
  { path: 'get-started-modal', loadChildren: './pages/common/group-finder/get-started-modal/get-started-modal.module#GetStartedModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
