import { OnInit } from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

import { IonSlides, AlertController } from '@ionic/angular';
import { CurrentViewServiceService } from 'src/app/services/currentViewService/current-view-service.service';
import { ConjugationService } from 'src/app/services/libs/conjugation/conjugation.service';
import { VerbgroupsService } from 'src/app/services/libs/verbgroups/verbgroups.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exconjug',
  templateUrl: './exconjug.page.html',
  styleUrls: ['./exconjug.page.scss'],
})
export class ExconjugPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  display_letter_button: Array<string>;
  good_answer:Array<string>;
  number_buttons:Array<number>;
  random_number_list:Array<string>;
  random_letter_list2 :Array<string>;
  count_number: number;
  lesson_number:number;
  test_answer:Array<number>;
  count_answer : number;
  list_verb_full :Array<string>;
  list_verb_half : Array<string>;
  list_verb_conjugate :Array<string>;
  list_missing_letter:Array<string>;
  list_number_letter:Array<number>;
  list_is:Array<string>;
  list_becomes:Array<string>;
  list_pers:Array <number>;
  longuest_verb_ending:number;
  level_number:number;
  verb_half : string;
  missing_letter :string;
  index_half_word:number;
  number_letter:number;
  verb_list:any;
  count_missing_letter:number;
  display_help_button:boolean=true;
  display_pers:string;

  constructor(private router: Router,private route:ActivatedRoute, private http: Http, public  currentView: CurrentViewServiceService,
              public alertCtrl: AlertController,public conjug:ConjugationService ,public verbGroup:VerbgroupsService) {
      this.lesson_number=this.route.snapshot.params['id'];
      this.list_verb_full=[];
      this.list_verb_half=[];
      this.list_verb_conjugate=[];
      this.list_missing_letter=[];
      this.list_number_letter=[];
      this.list_is=[];
      this.list_becomes=[];
      this.list_pers=[];
      this.verb_list={};
      this.verb_half='';
      this.missing_letter ='';
      this.display_letter_button=[];
      this.number_buttons=[0,1,2,3,4,5];
      this.random_number_list=[];
      this.count_number=0;
      this.random_letter_list2=['a','b','c','ä','u','i','o','t','e','v','p','l','s','q','f','y','r','n','m'];
      this.test_answer=[];
      this.good_answer=[];
      this.count_answer=0;
      this.index_half_word=0;
      this.number_letter=0;
      this.count_missing_letter=0;
      this.display_pers='';
      this.longuest_verb_ending=0;

  }

  ngOnInit() {
   let j;
   // let pers;
   let pers_sent;

      this.http.get('assets/data/lessons_conjugaison.json').map(res => res.json()).subscribe(data => { //get "lessons" into json file
          this.verb_list = data;
          let num = this.lesson_number;
          let i;
          this.level_number = this.verb_list.lessons[num].level;
          if(this.verb_list.lessons[num].random){ //we randomize the sequence of the word

              for(i=0;i<this.verb_list.lessons[num].content.length;i++){

                  this.random_number_list[i]=i;
              }
              this.shuffleArray(this.random_number_list);
              //console.log(this.random_number_list);

              for (i = 0; i < this.verb_list.lessons[num].content.length; i++) {
                  this.list_verb_full.push(this.verb_list.lessons[num].content[i].word);

              }

              for (i=0;i<this.list_verb_full.length;i++) {
                  if(this.verb_list.lessons[num].content[i].pers==0) {
                      pers_sent=Math.floor(Math.random() * 6)+1;
                      console.log("pers-sent " +pers_sent);
                      this.conjug.Groupchoice(pers_sent, this.list_verb_full[i]);
                      this.list_pers[this.random_number_list[i]]=pers_sent;
                      }
                  else {
                      this.conjug.Groupchoice(this.verb_list.lessons[num].content[i].pers, this.list_verb_full[i]);
                      this.list_pers[this.random_number_list[i]]=this.verb_list.lessons[num].content[i].pers;
                  }


                  this.list_is[this.random_number_list[i]] = this.conjug.is;
                  this.list_becomes[this.random_number_list[i]] = this.conjug.becomes;
                  this.list_verb_half[this.random_number_list[i]] = this.conjug.half_word;
                  this.list_missing_letter[this.random_number_list[i]] = this.conjug.verb_ending;
                  this.list_number_letter[this.random_number_list[i]] = this.conjug.verb_ending.length;
                  this.list_verb_conjugate[this.random_number_list[i]] = this.conjug.conjugate_verb;
                  for (j = 0; j < this.list_number_letter[this.random_number_list[i]]; j++) {

                      this.list_verb_half[this.random_number_list[i]] = this.list_verb_half[this.random_number_list[i]] + "_";
                  }
              }


          }
          else {//if random variable = false , we take the normal sequence
              for (i = 0; i < this.verb_list.lessons[num].content.length; i++) {
                  this.list_verb_full.push(this.verb_list.lessons[num].content[i].word);

              }

              for (i=0;i<this.list_verb_full.length;i++) {
                  if(this.verb_list.lessons[num].content[i].pers==0) {
                      pers_sent=Math.floor(Math.random() * 6)+1;
                      console.log("pers-sent " +pers_sent);
                      this.conjug.Groupchoice(pers_sent, this.list_verb_full[i]);
                      this.list_pers[i]=pers_sent;
                  }
                  else {
                      this.conjug.Groupchoice(this.verb_list.lessons[num].content[i].pers, this.list_verb_full[i]);
                      this.list_pers[i]=this.verb_list.lessons[num].content[i].pers;
                  }

                  this.list_is[i] = this.conjug.is;
                  this.list_becomes[i] = this.conjug.becomes;
                  this.list_verb_half[i] = this.conjug.half_word;
                  this.list_missing_letter[i] = this.conjug.verb_ending;
                  this.list_number_letter[i] = this.conjug.verb_ending.length;
                  this.list_verb_conjugate[i] = this.conjug.conjugate_verb;
                  for (j = 0; j < this.list_number_letter[i]; j++) {

                      this.list_verb_half[i] = this.list_verb_half[i] + "_";
                  }
              }

          }

              for(i=0;i<this.list_missing_letter.length;i++){
                  if(this.list_missing_letter[i].length>this.longuest_verb_ending){
                      this.longuest_verb_ending=this.list_missing_letter[i].length;

                  }


              }

               // pers = this.list_pers[this.count_number];
               this.missing_letter=this.list_missing_letter[this.count_number];

              this.number_letter=this.list_number_letter[this.count_number];
              this.index_half_word=this.list_verb_half[this.count_number].length-this.number_letter;
                   this.verb_half=this.list_verb_half[this.count_number];

           for (i=0;i<this.missing_letter.length;i++){
               this.good_answer[i]=this.missing_letter.substring(i,i+1);

           }
          // this.displayPers(pers);
          this.prepareSlide(this.good_answer);

              });
      }







  async goToSlide(letter :string, id_test_letter:number) {// go to next slide
      let i;
      // let pers;
     if(this.testAnswer(letter, id_test_letter)) { // test if it's a good answer
          if(this.testEnd()){
              this.display_help_button=false;
              this.showAlert();

          }
          else
          {
              let currentIndex = await this.slides.getActiveIndex();

              this.count_number=this.count_number+1;
              // pers = this.list_pers[this.count_number];
              this.missing_letter=this.list_missing_letter[this.count_number];
              this.number_letter=this.list_number_letter[this.count_number];
              this.index_half_word=this.list_verb_half[this.count_number].length-this.number_letter;
              this.verb_half=this.list_verb_half[this.count_number];

              this.good_answer=[];
              this.count_answer=0;
              for (i=0;i<this.missing_letter.length;i++){
                  this.good_answer[i]=this.missing_letter.substring(i,i+1);

              }


              this.display_help_button=true;
              setTimeout(() => this.slides.slideTo(currentIndex + 1, 500), 500);



          }


     }

  }

  prepareSlide(letters: Array<string>) {
      this.fillArraynumber(this.level_number,this.longuest_verb_ending);
      this.count_missing_letter=this.number_letter;

      this.display_letter_button=[];

      let i;
      this.shuffleArray(this.random_letter_list2);
      for (i=0;i<letters.length;i++){
          this.display_letter_button[i]=letters[i];
      }
      for (i=letters.length;i<this.number_buttons.length;i++){

          this.display_letter_button[i] =this.random_letter_list2[i];
      }
      this.shuffleArray(this.display_letter_button);

      this.displayPers(this.list_pers[this.count_number]);

  }

  testAnswer(letter: string,id_test_letter : number):boolean{// we use this fonction to change color of buttons with CSS

      let temp;
      if(letter==this.missing_letter[this.count_answer]){// second we check if the goodanswer is display
              temp=this.list_verb_full[this.count_number].indexOf(letter);

              this.verb_half=this.verb_half.substr(0, this.index_half_word) + letter + this.verb_half.substr(this.index_half_word+ 1);

              this.index_half_word=this.index_half_word+1;
              this.count_missing_letter=this.count_missing_letter-1;
              this.list_verb_half[this.count_number]=this.verb_half;
              //this.good_answer.splice(this.good_answer.indexOf(letter),1);
              this.count_answer=this.count_answer+1;
               this.test_answer[id_test_letter]=1;
              setTimeout(() => this.test_answer[id_test_letter] = 0, 1000);

              if(this.verb_half==this.list_verb_conjugate[this.count_number]){
              return true;
               }
               else {
                  return false
              }
          }
      else {
              this.test_answer[id_test_letter]=2;
              setTimeout(() => this.test_answer[id_test_letter]= 0, 1000);
              return false


          }



  }


  testEnd():boolean {

      if(this.count_number==this.list_verb_half.length-1){

              return true;

      }
      else {

              return false;
          }
      }

  fillArraynumber(number_level :number,max_buttons:number) { //display a number of buttons according to level of exercise
      let i;
      //console.log("nombre de lettre " +this.number_letter);
      switch (number_level) {
          case  1:
              this.number_buttons.length=0;

              for (i=0;i<max_buttons+1;i++){
                  this.number_buttons.push(i);
              }
              break;

          case  2:
              this.number_buttons.length=0;

              for (i=0;i<max_buttons+2;i++){
                  this.number_buttons.push(i);
              }
              break;
          case  3:
              this.number_buttons.length=0;
              for (i=0;i<max_buttons+3;i++){
                  this.number_buttons.push(i);
              }
              break;
          default:

      }

  }


  async help(){
      this.display_help_button=false;
      let i;
      let letter=this.missing_letter[this.count_answer];
      let pers;
      if(this.count_missing_letter>1){ //if is not the end of the word
          this.verb_half=this.verb_half.substr(0, this.index_half_word) + letter + this.verb_half.substr(this.index_half_word+ 1);
          this.index_half_word=this.index_half_word+1;
          this.count_missing_letter=this.count_missing_letter-1;
          this.list_verb_half[this.count_number]=this.verb_half;
          this.count_answer=this.count_answer+1;
          setTimeout(() => this.display_help_button=true,700 );

      }
      else // else we do the same things than in the gotoSlide fonction
      {
          this.verb_half=this.verb_half.substr(0, this.index_half_word) + letter + this.verb_half.substr(this.index_half_word+ 1);
          this.index_half_word=this.index_half_word+1;
          this.count_missing_letter=this.count_missing_letter-1;
          this.list_verb_half[this.count_number]=this.verb_half;
          this.count_answer=this.count_answer+1;
          if(this.testEnd()){
              this.display_help_button=false;
              this.showAlert();

          }
          else
          {
              let currentIndex = await this.slides.getActiveIndex();

              this.count_number=this.count_number+1;
              pers = this.list_pers[this.count_number];
              this.missing_letter=this.list_missing_letter[this.count_number];
              this.number_letter=this.list_number_letter[this.count_number];
              this.index_half_word=this.list_verb_half[this.count_number].length-this.number_letter;
              this.verb_half=this.list_verb_half[this.count_number];
              //console.log("pers :" + pers);

              this.count_answer=0;
              for (i=0;i<this.missing_letter.length;i++){
                  this.good_answer[i]=this.missing_letter.substring(i,i+1);

              }
              //console.log(this.good_answer);
              this.displayPers(pers);
              //this.prepareSlide(this.good_answer);

              setTimeout(() => this.slides.slideTo(currentIndex + 1, 500), 500);
              setTimeout(() => this.display_help_button=true,700 );


          }

      }



  }
  displayPers(pers:number) {
      switch (pers) {
          case  1:
              this.display_pers="Minä";
              break;
          case  2:
              this.display_pers="Sinä";
              break;
          case  3:
              this.display_pers="Hän";
              break;
          case  4:
              this.display_pers="Me";
              break;
          case  5:
              this.display_pers="Te";
              break;
          case  6:
              this.display_pers="He";
              break;
          default:
              break;
      }
  }


  shuffleArray(array): Array<number> {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }

      return array;
  }

  async showAlert() {
      let alert = await this.alertCtrl.create({
          message: 'You successfully completed this exercise.',
          header: 'Well done!',
          buttons: ['Great!']
      });
      await alert.present();
  }



}
