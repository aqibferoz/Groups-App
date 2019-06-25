import { Component, OnInit } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
// import {Exverbgroup} from "../exverbgroup/exverbgroup";
// import {Exconjug} from "../exconjug/exconjug";
import 'rxjs/add/operator/map';
import { CurrentViewServiceService } from 'src/app/services/currentViewService/current-view-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercisemenu',
  templateUrl: './exercisemenu.page.html',
  styleUrls: ['./exercisemenu.page.scss'],
})
export class ExercisemenuPage implements OnInit {
  group_ex_verb_list:any;
  lesson_list:Array<number>;
  lesson_conjug_list:Array<number>;
  page_title:string;
  verb_conjug_list:any;

  constructor(private router: Router, private http: Http, public  currentView: CurrentViewServiceService) {

  this.group_ex_verb_list={};
  this.verb_conjug_list={};
  this.lesson_conjug_list=[];
  this.lesson_list=[];
  this.page_title='';
  }

  ngOnInit() {
    this.http.get('assets/data/lessons_verb_group.json' ).map(res => res.json()).subscribe(data => { //get "verbs+first translation" into json file
console.log(data);
      this.group_ex_verb_list = data;
      let i;
        for(i=0;i<this.group_ex_verb_list.lessons.length;i++) {
          this.lesson_list[i]=i+1;
          console.log(this.lesson_list)
          
        }

      this.http.get('assets/data/lessons_conjugaison.json').map(res => res.json()).subscribe(data => { //get "verbs+first translation" into json file

        this.verb_conjug_list = data;
        let i;
        for(i=0;i<this.verb_conjug_list.lessons.length;i++) {
          this.lesson_conjug_list[i]=i+1;
          console.log(this.lesson_conjug_list);

        }
      });
    });

  }


  goTo(component: number,number : number, level : number) { //go to Exverbgroup with number of the choosen lesson
    console.log(number)
    switch (component) { //display easy, medium or hard according to level of lesson
      case  1:
      let a=number
        this.router.navigate(
          ['exverbgroup/'+a]);
        this.page_title='Exverbgroup' +(number);
        break;

      case  2:
        let b=number-1
        this.router.navigate(
          ['exconjug/'+b]);
        this.page_title='Exconjug' +(number);
        break;
      default:


    }
    this.currentView.currentPageTitle=this.page_title;
  }





}
