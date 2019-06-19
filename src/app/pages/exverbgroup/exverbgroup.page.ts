import { OnInit } from '@angular/core';
import {Component, ViewChild} from '@angular/core';
// import { Slides } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
// import {VerbGroups} from "../../providers/libs/verbgroups";
// import {CurrentViewService} from "../../providers/currentViewService";
import { IonSlides, AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { VerbgroupsService } from 'src/app/services/libs/verbgroups/verbgroups.service';
import { CurrentViewServiceService } from 'src/app/services/currentViewService/current-view-service.service';

@Component({
  selector: 'app-exverbgroup',
  templateUrl: './exverbgroup.page.html',
  styleUrls: ['./exverbgroup.page.scss'],
})
export class ExverbgroupPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  lessons: Array<string>;
  verb_list:any;
  finnish_verb_list:Array<string>;
  definition_list:Array<string>;
  display_verb: Array<string>;
  display_trans: Array<string>;
  display_number_button: Array<number>;
  good_answer:number;
  number_buttons:Array<number>;
  random_number_list:Array<number>;
  random_number_list2 :Array<number>;
  count_number: number;
  lesson_number:number;
  test_answer:Array<number>;

  constructor(private navCtrl:NavController, private router: Router,private route:ActivatedRoute, private http: Http, private verbGroup: VerbgroupsService,public  currentView: CurrentViewServiceService,
              public alertCtrl: AlertController) {

  this.display_verb=[];
  this.display_trans=[];
  this.verb_list={};
  this.display_number_button=[];
  this.number_buttons=[];
  this.random_number_list=[];
  this.count_number=0;
  this.random_number_list2=[];
  this.test_answer=[];
  this.lesson_number=this.route.snapshot.params['id'];
  console.log(this.lesson_number);
  
  
  // navParams.get("lessons");
  console.log(this.lesson_number)

  }

  ngOnInit() {
    this.http.get('assets/data/lessons_verb_group.json').map(res => res.json()).subscribe(data => { //get "lessons" into json file

      this.verb_list = data;
      let num =this.lesson_number;

      let i;

      let level_number = this.verb_list.lessons[num].level;
      if(this.verb_list.lessons[num].random){//if we want to randomize order of the verbs

          for(i=0;i<this.verb_list.lessons[num].content.length;i++){
            this.random_number_list[i]=i;

          }
          this.shuffleArray(this.random_number_list);//shuffle array number for randomize
          for (i=0;i<this.verb_list.lessons[num].content.length;i++){

                this.display_verb.push(this.verb_list.lessons[num].content[this.random_number_list[i]].word); // fill array of display word
                this.display_trans.push(this.verb_list.lessons[num].content[this.random_number_list[i]].def);
          }

      }
      else{
        for(i=0;i<this.verb_list.lessons[num].content.length;i++){
          this.display_verb.push(this.verb_list.lessons[num].content[i].word);
          this.display_trans.push(this.verb_list.lessons[num].content[i].def);
        }
      }


      this.fillArraynumber(level_number); //allow to display good number of buttons
      for (i=0;i<this.number_buttons.length;i++){
        this.test_answer[i]=0;

      }
      this.good_answer=this.getGroupenb(this.display_verb[0]);
      //console.log(this.good_answer);
      this.randomButton(this.good_answer); //randomize display answer on buttons
    });

  }



 /* ngOnInit() {
    this.http.get('assets/data/finnish_verbs_search.json').map(res => res.json()).subscribe(data => { //get "verbs+first translation" into json file
      this.verb_list = data;
      let finnish_verb_list = [];
      let definition_list = [];
      this.verb_list.forEach(function(item) {// we split verbs and first translation into two array
        let finmot = item.indexOf("|"); //we must to use some temp array to do this
        finnish_verb_list.push(item.slice(0, finmot));
        definition_list.push(item.slice(finmot + 1));
      });
      this.finnish_verb_list = finnish_verb_list;
      this.definition_list=definition_list;
      this.display_verb[0]=this.randomVerb();
      this.display_verb[1]=this.randomVerb();
      this.display_trans[0]=this.getTrans(this.display_verb[0]);
      this.display_trans[1]=this.getTrans(this.display_verb[1]);
      this.fillArraynumber(6);
     this.good_answer=this.getGroupenb(this.display_verb[0]);
      this.prepareSlide(this.good_answer);


    });

  }

  randomVerb():string {
     return this.finnish_verb_list[Math.floor(Math.random()*this.finnish_verb_list.length)];
  }
  getTrans(verb: string): string {
    let  trans=this.definition_list[this.finnish_verb_list.indexOf(verb)];
    return trans;
  }*/

  getGroupenb(verb: string): number {
    this.verbGroup.verb_group(verb);
    let number= this.verbGroup.word_analysis.groupnb;
    return number;
  }

  async goToSlide(number :number, id_test_number:number) {// go to next slide
    if(this.testAnswer(number, id_test_number)) { // test if it's a good answer

      if(this.testEnd()){ // test if user is in the end of exercise
        this.showAlert();
      //  this.navCtrl.push(GroupFinder);
      }
      else {
        let currentIndex = await this.slides.getActiveIndex();
        this.good_answer = this.getGroupenb(this.display_verb[currentIndex + 1]); //each time we go to next time , we randomize buttons
        //this.prepareSlide(this.good_answer);
        setTimeout(() => this.slides.slideTo(currentIndex + 1, 500), 500);
        this.count_number=this.count_number+1;
      }
    }

  }

  testEnd():boolean{
    if(this.count_number==this.display_verb.length-1){

      return true;

    }
    else {

      return false;
    }
  }

 randomButton(number: number) {
    let randomnumber= Math.floor(Math.random() * 2);

   let i;
   for(i=0;i<6;i++){
     this.random_number_list2[i]=i+1;
   }
   this.shuffleArray(this.random_number_list2);
   for (i = 0; i < this.number_buttons.length; i++) { //First we randomize answer in buttons

         this.display_number_button[i] =this.random_number_list2[i];
   }

  if(this.display_number_button.indexOf(number)!==-1){// second we check if the goodanswer is display
     //console.log("number already in buttons");
  }
  else { //if not , we put it in one random button
    this.display_number_button[randomnumber]=number;
  }

 }


  testAnswer(number: number,id_test_number : number):boolean{// we use this fonction to change color of buttons with CSS

    if(number==this.good_answer){
      this.test_answer[id_test_number]=1;
      setTimeout(() => this.test_answer[id_test_number] = 0, 1000);
      return true;

    }
    else {
      this.test_answer[id_test_number]=2;
      setTimeout(() => this.test_answer[id_test_number]= 0, 1000);
      return false;
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

  fillArraynumber(number :number) { //display a number of buttons according to level of exercise
    let i;
    switch (number) {
      case  1:
        this.number_buttons.length=0;

        for (i=0;i<3;i++){
        this.number_buttons.push(i);
      }
        break;

      case  2:
        this.number_buttons.length=0;

        for (i=0;i<4;i++){
          this.number_buttons.push(i);
        }
        break;
      case  3:
        this.number_buttons.length=0;
        for (i=0;i<6;i++){
          this.number_buttons.push(i);
        }
        break;
      default:

    }

}


  async showAlert() {
    const alert = await this.alertCtrl.create({
      message : 'You successfully completed this exercise.',
      header: 'Well done!',
      buttons: ['Great!']
    });
    await alert.present();
  }
  pop(){
    this.navCtrl.back();
  }
}
