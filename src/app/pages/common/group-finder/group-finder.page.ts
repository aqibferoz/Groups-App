
import {Component, OnInit, AfterContentInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';



import {Storage} from '@ionic/storage';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
// import {DescVbGr1Present} from '../desc_present/desc_vb_group1_present';
// import {DescVbGr2Present} from '../desc_present/desc_vb_group2_present';
// import {DescVbGr3Present} from '../desc_present/desc_vb_group3_present';
// import {DescVbGr4Present} from '../desc_present/desc_vb_group4_present';
// import {DescVbGr5Present} from '../desc_present/desc_vb_group5_present';
// import {DescVbGr6Present} from '../desc_present/desc_vb_group6_present';
// import {DescExceptionsPresent} from '../desc_present/desc_exceptions_present';
// import {VerbGroups} from '../../providers/libs/verbgroups';
// import {GetStartedModal} from './get_started_modal';
// import {CurrentViewService} from "../../providers/currentViewService";

import { IonInput, ModalController, MenuController } from '@ionic/angular';
import { VerbgroupsService } from 'src/app/services/libs/verbgroups/verbgroups.service';
import { CurrentViewServiceService } from 'src/app/services/currentViewService/current-view-service.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-finder',
  templateUrl: './group-finder.page.html',
  styleUrls: ['./group-finder.page.scss'],
})
export class GroupFinderPage implements OnInit, AfterContentInit  {

  private display_inf: string;
  private display_expl: string;
  private display_irrexpl: string;
  private cg_explanation: string;
  private display_trans : Array<string>;
  private display_type : string;
  private attr: string;
  private display_groupnb: number;
  private index: number ;
  private firstTime: boolean;
  private typing: boolean;
  private searching: boolean = false;//handle display of spinning
  private verb_list: Array<string>;
  private verb_info : any;
  private current_verb_in_use_display: Array<string>;
  private display_verb:string;
  private display_spinner : boolean;
  private show_trans: boolean=false;
  private display_placeholder : string;
  private show : boolean =true;
  private more_less:string;
  private show_more_less :boolean=true;

  private search: string;
  private searchValue: string;
  private searchControl: FormControl;

  private display_finnco:boolean;

  private finnish_verb_list : Array<string>;
  private definition_list: Array<string>;

  @ViewChild('inputfocusinit') searchInput: IonInput;

 

  constructor(private modalController : ModalController,
              private http: Http,
              private verbGroup: VerbgroupsService,
       private router:Router,
              public menuCtrl: MenuController,
              private storage: Storage,
              public currentView: CurrentViewServiceService
  ) {

      this.display_inf = "Enter a Finnish verb in its basic form in the above field";
      this.display_placeholder="Search";
      this.display_verb="";
      this.display_expl = "";
      this.display_irrexpl = "";
      this.cg_explanation = "";
      this.attr = "";
      this.display_type="";
      this.display_groupnb = -2;
      this.firstTime=true;
      this.typing = false;
      this.display_finnco = true;
      this.display_trans=[];
      this.verb_list=[];
      this.verb_info={};
      this.finnish_verb_list=[];
      this.definition_list=[];
      this.display_spinner=true;
      this.searchControl =new FormControl();
      this.more_less='more';
      this.show_more_less=true;
      this.current_verb_in_use_display = [""]
      //debug
      // this.charat1 = "";
      // this.charat2 = "";
      // this.charat3 = "";
      // this.charat4 = "";

    }



  ngOnInit() {
    this.Init(this.storage);
    this.search = '';
    this.searchValue = '';
   //https://egghead.io/lessons/rxjs-rxjs-observables-vs-promises
   // this.searchControl.valueChanges.distinctUntilChanged().subscribe(search => {

  }
  ionViewDidEnter() {
    console.log("search");
    this.searchControl.valueChanges.debounceTime(400).subscribe(search => { 
      console.log(search);//debouncetime allow to wait X seconds before to launch searching
      this.search = search;

        if(this.search != ''){
          this.doneTyping(this.search);
          this.searching = false;
        }
      this.searching = false;

    });


  }



  onSearchInput(longueur){ // not display spinner before two letters in search input
      if (longueur < 2) {
        this.searching = false;
      }
      else {
        this.searching = true;
      }
      }

    ngAfterContentInit() {
      this.http.get('assets/data/finnish_verbs_search.json').map(res => res.json()).subscribe(data => { //get "verbs+first traduction" into json file
        this.verb_list = data;
        let finnish_verb_list = [];
        let definition_list = [];
        this.verb_list.forEach(function(item) {// we split verbs and first traduction into two array
          let finmot = item.indexOf("|"); //we must to use some temp array to do this
          finnish_verb_list.push(item.slice(0, finmot));
          definition_list.push(item.slice(finmot + 1));
        });
        this.finnish_verb_list = finnish_verb_list;
        this.definition_list=definition_list;

      });
      this.http.get('assets/data/finnish_verbs_info.json').map(res => res.json()).subscribe(data => { //get all the informations into json file
        this.verb_info = data;
      });

    }






  Init(storage) {
console.log(storage)
    storage.get('firstTime').then((first_time) => {
      if(first_time==null)
      // if(first_time!=null)//DEBUG
      {
        // let modal = this.modalController.create(GetStartedModal);
        // modal.present();
        storage.set('firstTime', JSON.stringify(new Date().getTime()));
        this.menuCtrl.open();
      }
      else {
        this.searchInput.setFocus();
      }
    });

    storage.get('firstDisplayAd').then((first_time) => {
      if(first_time!=null)
      {
        //this.adsAndRating.first_display=false;
        // PLEASE ADD THIS LIKE THAT, COMMENTED, IN THE IONIC 4 PORT
        // THIS IS FOR FUTURE REFERENCE FOR ME TO ADD ADS SOMEDAY
      }
    });


  }

  ProcessClick(verb:any) {
    console.log(verb)
    this.show_more_less=true;

    this.show_trans=false;
    let typeverb : string= '';


      this.show_trans=true;
      this.index = verb.index;
      this.typing = false;
      this.verbGroup.verb_group(verb.word);
      this.display_verb = verb.word;
      this.display_trans = this.verb_info.verbs[this.index][verb.word].translations;
       typeverb= this.verb_info.verbs[this.index][verb.word].type;
       this.display_inf =verb.word;

    this.typing = false; //if the word is not in the list but could exist we just display informations about conjugation and not about traductions and type
    this.verbGroup.verb_group(verb.word);
    this.display_inf=verb.word;
    this.display_irrexpl = this.verbGroup.word_analysis.ir_explanation; // getting informations about conjugation
    this.cg_explanation = this.verbGroup.word_analysis.cg_explanation;
    this.display_groupnb = this.verbGroup.word_analysis.groupnb;
    this.display_expl = this.verbGroup.word_analysis.explanation;
    this.attr = this.verbGroup.word_analysis.attr;
    this.display_placeholder=verb.word;

    switch(typeverb) {
      case 'v':
        this.display_type="Transitive/Intransitive depending on translation";
        break;
      case 'vt':
        this.display_type='Transitive verb';
        break;
      case 'vi':
        this.display_type='Intransitive verb';
        break;
      case 'vit':
        this.display_type='Transitive/Intransitive verb'
        break;

      default:
        this.display_type="Transitive/Intransitive depending on translation";
        break
    }

    if(this.display_trans.length<3){
      this.show_more_less=false;
    }
    else {
      this.show_more_less =true;
    }

    if (this.display_groupnb == 0){ //if the verbs can't be conjugate we just display a message
      this.display_inf = "Make sure you entered a verb in its basic form";
      this.searching =false;
    }
    else {
      this.searchValue='';
    }
    this.currentView.lastsearchverb=verb.word;
    // this.adsAndRating.showAdAfterXSeconds(12); //prod mode
    //TODO Ad was called here
    // PLEASE ADD THIS LIKE THAT, COMMENTED, IN THE IONIC 4 PORT
    // THIS IS FOR FUTURE REFERENCE FOR ME TO ADD ADS SOMEDAY
  }

  ProcessEnter(word,firstwordofthelist) {
    let i;
    console.log(word);
    console.log(firstwordofthelist);
    this.show_more_less=true;
    // console.log(firstwordofthelist)
    this.show_trans=false;
    let typeverb : string= '';

    // Dirty fix for getting the first verb of the list on enter processed
    if (firstwordofthelist !== undefined && firstwordofthelist !== "") {
      word = firstwordofthelist.word;
    }
    //Dirty fix

    if(this.finnish_verb_list.indexOf(word)!==-1) {//if the word exist (it's on the verbs list
      this.show_trans=true;
      for(i=0;i<this.verb_list.length;i++){
        if(word==this.finnish_verb_list[i]){
          this.index=i;
        }
      }

      this.typing = false;
      this.verbGroup.verb_group(word);
      this.display_verb = word;
      this.display_trans = this.verb_info.verbs[this.index][word].translations;
      typeverb= this.verb_info.verbs[this.index][word].type;
      this.display_inf =word;
    }

    this.typing = false; //if the word is not in the list but could exist we just display informations about conjugation and not about traductions and type
    this.verbGroup.verb_group(word);
    this.display_inf=word;
    this.display_irrexpl = this.verbGroup.word_analysis.ir_explanation; // getting informations about conjugation
    this.cg_explanation = this.verbGroup.word_analysis.cg_explanation;
    this.display_groupnb = this.verbGroup.word_analysis.groupnb;
    this.display_expl = this.verbGroup.word_analysis.explanation;
    this.attr = this.verbGroup.word_analysis.attr;
    this.display_placeholder=word;

    switch(typeverb) {
      case 'v':
        this.display_type="Transitive/Intransitive depending on translation";
        break;
      case 'vt':
        this.display_type='Transitive verb';
        break;
      case 'vi':
        this.display_type='Intransitive verb';
        break;
      case 'vit':
        this.display_type='Transitive/Intransitive verb'
        break;

      default:
        this.display_type="Transitive/Intransitive depending on translation";
        break
    }

    if(this.display_trans.length<3){
      this.show_more_less=false;
    }
    else {
      this.show_more_less =true;
    }

    if (this.display_groupnb == 0){ //if the verbs can't be conjugate we just display a message
      this.display_inf = "Make sure you entered a verb in its basic form";
      this.searching =false;
    }
    else {
      this.searchValue='';
    }
    this.currentView.lastsearchverb=word;
    // this.adsAndRating.showAdAfterXSeconds(12); //prod mode
    //TODO Ad was called here
    // PLEASE ADD THIS LIKE THAT, COMMENTED, IN THE IONIC 4 PORT
    // THIS IS FOR FUTURE REFERENCE FOR ME TO ADD ADS SOMEDAY
  }



  doneTyping(userInput) {
console.log(userInput);
    let inputToCheck = userInput;

    if ( (inputToCheck.length > 1) ){
      this.display_finnco=false;
      //debug
      // this.curchar = currentchr.toLowerCase();
      // this.charat1 = userInput.charAt(0);
      // this.charat2 = userInput.charAt(1);
      // this.charat3 = userInput.charAt(2);
      // this.charat4 = userInput.charAt(3);
      inputToCheck = inputToCheck.toLowerCase();
      this.createVerbListDisplayed(inputToCheck);
      this.typing = true; //we display
      this.searching=false;
    }
    else {
      this.typing = false;//we don't display

    }


  }



  createVerbListDisplayed(input){//search in verb list with filter and create two list of verbs which could display for the searching
    let i;
    let matching_words = [];
    let filtered_words = [];
    let index_verb=[];
    let non_matching_chars_in_string=[];
    let finnish_verb_list=this.finnish_verb_list;
    let definition_list=this.definition_list;
    let translation : string;

    // TODO See https://codereview.stackexchange.com/questions/23899/faster-javascript-fuzzy-string-matching-function ?
    // and https://fusejs.io/
    matching_words = this.finnish_verb_list.filter(function(item,index) {//filter list of verbs regarding the letter in the search input
      if (item.toLowerCase().indexOf(input.toLowerCase()) > -1) {
        non_matching_chars_in_string.push(item.length-input.length);
        index_verb.push(index);
      }
      return item.toLowerCase().indexOf(input.toLowerCase()) > -1;
    });

    for(i=0;i<matching_words.length;i++){

        filtered_words.push( {"score":non_matching_chars_in_string[i],
          "word":matching_words[i], "translations":translation,"index":index_verb[i]});

    }

    filtered_words.sort(this.dynamicSort("score"));
    filtered_words.splice(10,filtered_words.length-10);

    for(i=0;i<filtered_words.length;i++){
      let indexdefi =finnish_verb_list.indexOf(filtered_words[i].word);

      filtered_words[i].translations=definition_list[indexdefi];

    }
   /* filtered_words.forEach(function(item){ //recording list of traduction beside the verb list
      let indexdefi =finnish_verb_list.indexOf(item);
      matching_translations.push(definition_list[indexdefi])
    });*/

    this.current_verb_in_use_display= filtered_words;
    console.log(this.current_verb_in_use_display);

    }

  showTrans(){
    if(this.show==true){
      this.more_less='less';
      this.show=false;

    }
    else {
      this.more_less='more';
      this.show=true;
    }

  }


  displayMore() {//redirecting to the Groupeverbs pages

    let pageToNav = null;

    if(this.attr === "ir_pr") {
    this.router.navigate(['/desc-exceptions-present']);
      // pageToNav = DescExceptionsPresent;
    }else{
      switch(this.display_groupnb) {
        case 1:
            this.router.navigate(['/desc-vb-group1-present']);
          // pageToNav = DescVbGr1Present;
          break;
        case 2:
            this.router.navigate(['/desc-vb-group2-present']);
          // pageToNav = DescVbGr2Present;
          break;
        case 3:
            this.router.navigate(['/desc-vb-group3-present']);
          // pageToNav = DescVbGr3Present;
          break;
        case 4:
            this.router.navigate(['/desc-vb-group4-present']);
          // pageToNav = DescVbGr4Present;
          break;
        case 5:
            this.router.navigate(['/desc-vb-group5-present']);
          // pageToNav = DescVbGr5Present;
          break;
        default:
            this.router.navigate(['/desc-vb-group6-present']);
          // pageToNav = DescVbGr6Present;
      }

    }
    // this.nav.push(pageToNav);
    this.currentView.currentPageTitle=pageToNav;
    // this.adsAndRating.showAdAfterXSeconds(12); //prod mode
    //TODO Ad was called here
    // PLEASE ADD THIS LIKE THAT, COMMENTED, IN THE IONIC 4 PORT
    // THIS IS FOR FUTURE REFERENCE FOR ME TO ADD ADS SOMEDAY
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a,b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

}
