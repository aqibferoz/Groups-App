import { Injectable } from '@angular/core';
import {VerbGroups} from "./verbgroups";
import { VerbgroupsService } from '../verbgroups/verbgroups.service';

@Injectable({
  providedIn: 'root'
})
export class ConjugationService {

  half_word:string;
  verb_ending:string;
  conjugate_verb:string;
  group_number:number;
  is:string;
  becomes:string;
  input: string;
  consonent_gradation_or_not:boolean=false;
  index_cons_grad:number;
  v_harmony:string;


  constructor( private verbGroup: VerbgroupsService) {

      this.input = "";
      this.v_harmony = "";
      this.conjugate_verb="";
      this.verb_ending="";
      this.half_word="";
      this.index_cons_grad=0;
  }

  Groupchoice(person:number,verb:string){
          this.verbGroup.verb_group(verb);
          this.group_number=this.verbGroup.word_analysis.groupnb;
          this.is=this.verbGroup.word_analysis.cg_is_and_becomes.is;
          this.becomes=this.verbGroup.word_analysis.cg_is_and_becomes.becomes;
          if((this.verbGroup.word_analysis.cg_is_and_becomes.is=="" )/*&& (this.verbGroup.word_analysis.cg_is_and_becomes.becomes="")*/) {

              this.consonent_gradation_or_not=false;

          }
          else {
              this.consonent_gradation_or_not=true;
              this.index_cons_grad=verb.indexOf(this.is);
          }
      switch (this.group_number) {
          case  1:
              this.Group1(person,verb);
              break;

          case  2:
              this.Group2(person,verb);
              break;
          case  3:

              this.Group3(person,verb);
              break;
          case  4:
              this.Group4(person,verb);
              break;
          case  5:
              this.Group5(person,verb);
              break;
          case  6:
              this.Group6(person,verb);
              break;
          default:

      }



  }

  VowelHarmony(stem:string) {

      let i = stem.length;
      while (i--) {
          switch (stem.charAt(i)) {
              case 'a': case'o': case'u':
                  this.v_harmony = 'back';
                  break;
              case 'ä': case'ö': case'y':
                  this.v_harmony = 'front';
                  break;
              case 'i': case 'e': default: // if there are only i and e, the word is considered a using front vowels
          }
      }

      this.v_harmony = 'front';
  }



  Group1(person:number,verb:string) {
      if (this.consonent_gradation_or_not){

          // console.log("on est dans la consonent gradation");
          this.half_word=verb.substr(0, this.index_cons_grad);

          switch (person) {
              case  1:
                  this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-1) +'n';
                  break;

              case  2:
                  this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-1) +'t';
                  break;
              case  3:
                  this.half_word=verb.substring(0,verb.length-1);
                  this.verb_ending=this.half_word[this.half_word.length-1]
                  break;
              case  4:
                  this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-1) +'mme';
                  break;
              case  5:
                  this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-1) +'tte';
                  break;
              case  6:
                  this.half_word=verb.substring(0,verb.length-1);
                  this.VowelHarmony(this.half_word);
                  if (this.v_harmony == "back"){
                      this.verb_ending='vat';
                  } else {
                      this.verb_ending='vät';
                  }
                  break;
              default:

          }


      }
      else {
          // console.log("on est pas dans la consonent gradation");
          this.half_word=verb.substring(0,verb.length-1);
          switch (person) {
              case  1:
                  this.verb_ending='n';
                  break;

              case  2:
                  this.verb_ending='t';
                  break;
              case  3:

                  this.verb_ending=this.half_word[this.half_word.length-1];
                  break;
              case  4:
                  this.verb_ending='mme';
                  break;
              case  5:
                  this.verb_ending='tte';
                  break;
              case  6:

                  this.VowelHarmony(this.half_word);
                  if (this.v_harmony == "back"){
                      this.verb_ending='vat';
                  } else {
                      this.verb_ending='vät';
                  }
                  break;
              default:

          }

      }



  this.conjugate_verb=this.half_word+this.verb_ending;



  }


  Group2(person:number,verb:string) {
      this.half_word=verb.substring(0,verb.length-2);
      switch (person) {
          case  1:
              this.verb_ending='n';
              break;
          case  2:
              this.verb_ending='t';
              break;
          case  3:
              this.half_word=verb.substring(0,verb.length-3);
              this.verb_ending=verb.substring(verb.length-3,verb.length-2);
              break;
          case  4:
              this.verb_ending='mme';
              break;
          case  5:
              this.verb_ending='tte';
              break;
          case  6:
              this.VowelHarmony(this.half_word);
              if (this.v_harmony == "back"){
                  this.verb_ending='vat';
              } else {
                  this.verb_ending='vät';
              }
              break;
          default:
      }
      this.conjugate_verb=this.half_word+this.verb_ending;
  }

  Group3(person:number,verb:string) {
      if (this.consonent_gradation_or_not){
        // if(verb.substring(verb.length-3,verb.length)=="lla" || verb.substring(verb.length-3,verb.length)=="llä" ){

              this.half_word=verb.substr(0, this.index_cons_grad);


              switch (person) {
                  case  1:
                      this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'en';
                      break;

                  case  2:
                      this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'et';
                      break;
                  case  3:

                      this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'ee';
                      break;
                  case  4:
                      this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'emme';
                      break;
                  case  5:
                      this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'ette';
                      break;
                  case  6:

                      this.VowelHarmony(this.half_word);
                      if (this.v_harmony == "back"){
                          this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'evat';
                      } else {
                          this.verb_ending=this.becomes +verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'evät';
                      }

                      break;
                  default:

              }


      }
      else
      {

          this.half_word=verb.substring(0,verb.length-2)+'e';

          switch (person) {
              case  1:
                  this.verb_ending='n';
                  break;

              case  2:
                  this.verb_ending='t';
                  break;
              case  3:

                  this.verb_ending='e';
                  break;
              case  4:
                  this.verb_ending='mme';
                  break;
              case  5:
                  this.verb_ending='tte';
                  break;
              case  6:
                  this.VowelHarmony(this.half_word);
                  if (this.v_harmony == "back"){
                      this.verb_ending='vat';
                  } else {
                      this.verb_ending='vät';
                  }
                  break;
              default:

          }
      }



      this.conjugate_verb=this.half_word+this.verb_ending;



  }


  Group4(person:number,verb:string) {
      //this.half_word=verb.substring(verb.length-2,verb.length-1)+verb[verb.length-1]; //just for drop the t
  if(this.consonent_gradation_or_not){
      this.half_word=verb.substr(0, this.index_cons_grad);
      switch (person) {
          case  1:
              this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+verb[verb.length-1]+'n';
              break;

          case  2:
              this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+verb[verb.length-1]+'t';
              break;
          case  3:

              this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+verb[verb.length-1]+this.half_word[this.half_word.length-1];
              break;
          case  4:
              this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+verb[verb.length-1]+'mme';
              break;
          case  5:
              this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+verb[verb.length-1]+'tte';
              break;
          case  6:

              this.VowelHarmony(this.half_word);
              if (this.v_harmony == "back"){
                  this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+verb[verb.length-1]+'vat';
              } else {
                  this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+verb[verb.length-1]+'vät';
              }
              break;
          default:

      }

  }
  else {
      this.half_word=verb.substring(0,verb.length-2)+verb[verb.length-1];
      switch (person) {
          case  1:
              this.verb_ending='n';
              break;

          case  2:
              this.verb_ending='t';
              break;
          case  3:

              this.verb_ending=this.half_word[this.half_word.length-1];
              break;
          case  4:
              this.verb_ending='mme';
              break;
          case  5:
              this.verb_ending='tte';
              break;
          case  6:
              this.VowelHarmony(this.half_word);
              if (this.v_harmony == "back"){
                  this.verb_ending='vat';
              } else {
                  this.verb_ending='vät';
              }
              break;
          default:

      }

  }



      this.conjugate_verb=this.half_word+this.verb_ending;



  }

  Group5(person:number,verb:string) {
      this.half_word=verb.substring(0,verb.length-1)+'se';

      switch (person) {
          case  1:
              this.verb_ending='n';
              break;

          case  2:
              this.verb_ending='t';
              break;
          case  3:

              this.verb_ending='e';
              break;
          case  4:
              this.verb_ending='mme';
              break;
          case  5:
              this.verb_ending='tte';
              break;
          case  6:
              this.VowelHarmony(this.half_word);
              if (this.v_harmony == "back"){
                  this.verb_ending='vat';
              } else {
                  this.verb_ending='vät';
              }
              break;
          default:

      }


      this.conjugate_verb=this.half_word+this.verb_ending;



  }
  Group6(person:number,verb:string) {
      if(this.consonent_gradation_or_not) {
          this.half_word=verb.substr(0, this.index_cons_grad);

          switch (person) {
              case  1:
                  this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'nen';
                  break;

              case  2:
                  this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'net';
                  break;
              case  3:

                  this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'nee';
                  break;
              case  4:
                  this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'nemme';
                  break;
              case  5:
                  this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'nette';
                  break;
              case  6:
                  this.VowelHarmony(this.half_word);
                  if (this.v_harmony == "back"){
                      this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'nevat';
                  } else {
                      this.verb_ending=this.becomes+verb.substring(this.index_cons_grad+this.is.length,verb.length-2)+'nevät';
                  }
                  break;
              default:

          }


      }
      else {
          this.half_word=verb.substring(0,verb.length-2);

          switch (person) {
              case  1:
                  this.verb_ending='nen';
                  break;

              case  2:
                  this.verb_ending='net';
                  break;
              case  3:

                  this.verb_ending='nee';
                  break;
              case  4:
                  this.verb_ending='nemme';
                  break;
              case  5:
                  this.verb_ending='nette';
                  break;
              case  6:
                  this.VowelHarmony(this.half_word);
                  if (this.v_harmony == "back"){
                      this.verb_ending='nevat';
                  } else {
                      this.verb_ending='nevät';
                  }
                  break;
              default:


          }



      }


      this.conjugate_verb=this.half_word+this.verb_ending;



  }


}
