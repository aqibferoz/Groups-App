import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerbgroupsService {
  word_analysis: {inf:string,
    explanation:string,
    groupnb:number,
    attr:string,
    ir_explanation:string,
    cg_explanation:string,
    cg_is_and_becomes: {
          is:string,
          becomes:string
      }
  };

input: string;


constructor() {
this.word_analysis = {inf: "",
explanation: "",
groupnb: -1,
attr:"",
ir_explanation: "",
cg_explanation: "",
cg_is_and_becomes:{is:"",becomes:""}
};
this.input = "";
}

check_input_is_word() {
//return input.match('^[äÄöÖA-Za-z]+$')
return /^[äÄöÖA-Za-z]+$/.test(this.input)
}

is_defective_verb() {
switch (this.input) {
case 'erkanee':
  this.word_analysis.inf = 'erkaantua';
  return 1;
case 'korjeta':
  this.word_analysis.inf = 'korota';
  return 1;
case 'korkenee':
  this.word_analysis.inf = 'nousta';
  return 1;
case 'parata':
  this.word_analysis.inf = 'parantua';
  return 1;
case 'seistä':
  this.word_analysis.inf = 'seisoa';
  return 1;
default :
  return 0;
}
}

is_irregular_present() {
let word = this.input;
if (word == 'olla' || word == 'tehdä' || word == 'nähdä' || word == 'keritä' || word == 'lohkoa')
return 1;
else
return 0;
}

is_irregular_verb() {
if (this.is_irregular_present()) {
this.word_analysis.ir_explanation = "/!\\ The conjugation of this verb is irregular in the present tense. /!\\";
this.word_analysis.attr = "ir_pr";
return 1
}
else
return 0;
}

has_consonant_gradation() {
//console.log(this.word_analysis.groupnb); //debug
let base: string;
switch (this.word_analysis.groupnb) {
case 1:
  base = this.input.substring(0, this.input.length - 1);
  // we keep uku case for u'u and lki so we remove only 1 vowel for later tests
  this.which_cons_grad1(base);

  break;
case 3:
  //special case, we check -lla but remove -Vlla
  if (this.input.charAt(this.input.length - 1) == 'l') {
      if (this.input.charAt(this.input.length - 2) == 'l') {
          base = this.input.substring(0, this.input.length - 3);
      }
  }
  else{
      base = this.input.substring(0, this.input.length - 2);
  }

  this.which_cons_grad2(base,3);

  break;
case 4:
  base = this.input.substring(0, this.input.length - 2);
  // we remove remove -Vta

  this.which_cons_grad2(base,4);

  break;
case 6:
  // we remove remove -ta to keep the -e in -eta if we might have the -je cases
  // else we have to remove -eta to detect

  if (this.input.charAt(this.input.length - 3) == 'j') {
      base = this.input.substring(0,this.input.length - 1);
  }
  else {
      base = this.input.substring(0,this.input.length - 2);
  }

  this.which_cons_grad2(base,6);

  break;
}


}

which_cons_grad1(base){

switch (base.charAt(base.length-2)) {

case 'k':

  if (base.charAt(base.length-3)=='k'){
      this.word_analysis.cg_is_and_becomes.is = "kk";
      this.word_analysis.cg_is_and_becomes.becomes = "k";
  }
  else if (base.charAt(base.length-3)=='n') {
      this.word_analysis.cg_is_and_becomes.is = "nk";
      this.word_analysis.cg_is_and_becomes.becomes = "ng";
  }
  else if (base.charAt(base.length-3)=='n') {
      this.word_analysis.cg_is_and_becomes.is = "nk";
      this.word_analysis.cg_is_and_becomes.becomes = "ng";
  }
  else if (base.charAt(base.length-3)=='s') {
      break;
  }
  else if (base.charAt(base.length-3)=='t') {
      break;
  }
  else if ((base.charAt(base.length-1)=='u' && (base.charAt(base.length-3)=='u'))) {   // exceptional cases such as maukua tho if first goes to k -> nothing
          this.word_analysis.cg_is_and_becomes.is = "uku";
          this.word_analysis.cg_is_and_becomes.becomes = "u'u";
  }
  else if ( base.charAt(base.length-3)=='l') {
      if(base.charAt(base.length-1)=='i'){
          this.word_analysis.cg_is_and_becomes.is = "lki";
          this.word_analysis.cg_is_and_becomes.becomes = "lje"
      }
      else {
          this.word_analysis.cg_is_and_becomes.is = "lk";
          this.word_analysis.cg_is_and_becomes.becomes = "lj";
      }
  }
  else if (base.charAt(base.length-3)=='r'){
      this.word_analysis.cg_is_and_becomes.is = "rk";
      this.word_analysis.cg_is_and_becomes.becomes = "rj";
  }
  else if (base.charAt(base.length-3)=='h'){
      if (base.charAt(base.length-1)=='e') {
          this.word_analysis.cg_is_and_becomes.is = "hke";
          this.word_analysis.cg_is_and_becomes.becomes = "hje";
      }
      else {
          break;
      }
  }
  else {
      this.word_analysis.cg_is_and_becomes.is = "k";
      this.word_analysis.cg_is_and_becomes.becomes = "Ø";
  }
  break;

case 'p':
  if (base.charAt(base.length-3)=='p'){
      this.word_analysis.cg_is_and_becomes.is = "pp";
      this.word_analysis.cg_is_and_becomes.becomes = "p";
  }
  else if (base.charAt(base.length-3)=='m') {
      this.word_analysis.cg_is_and_becomes.is = "mp";
      this.word_analysis.cg_is_and_becomes.becomes = "mm";
  }
  else if (base.charAt(base.length-3)=='s') { //never happens so far
      break;
  }
  else {
      this.word_analysis.cg_is_and_becomes.is = "p";
      this.word_analysis.cg_is_and_becomes.becomes = "v";
  }
  break;

case 't':

  if (base.charAt(base.length-1)=='s') { //kaitsea
      break;
  }
  switch (base.charAt(base.length-3)) {
      case 's':
          break;
      case 't':
          this.word_analysis.cg_is_and_becomes.is = "tt";
          this.word_analysis.cg_is_and_becomes.becomes = "t";
          break;
      case 'l':
          this.word_analysis.cg_is_and_becomes.is = "lt";
          this.word_analysis.cg_is_and_becomes.becomes = "ll";
          break;
      case 'n':
          this.word_analysis.cg_is_and_becomes.is = "nt";
          this.word_analysis.cg_is_and_becomes.becomes = "nn";
          break;
      case 'r':
          this.word_analysis.cg_is_and_becomes.is = "rt";
          this.word_analysis.cg_is_and_becomes.becomes = "rr";
          break;
      default:
          this.word_analysis.cg_is_and_becomes.is = "t";
          this.word_analysis.cg_is_and_becomes.becomes = "d";
          break;
  }

  break;

}

if(this.word_analysis.cg_is_and_becomes.is!=""){
this.word_analysis.cg_explanation = "/!\\ This verb has a consonant gradation in <b><span style=\"text-decoration:underline;\">all the persons except</span> the 3rd persons (sg. & pl.)</b>, " +
  "<span class=\"verb-stem\"> "+this.word_analysis.cg_is_and_becomes.is+" </span> becomes <span class=\"verb-termination\"> "+this.word_analysis.cg_is_and_becomes.becomes+"</span>. /!\\";

}
}

which_cons_grad2(base,group){
let kcase=["taa","maa","pae","pelä","oie","aue","raue","soe","vaie","pera","kara","lio","lia","lao","liie","liuo","liue","toe","huoa","loa","kye","laue","uha","hylä","koo","jael","joia","juos"];
//console.log(base); //debug
if(this.contains(kcase,base)){
this.word_analysis.cg_is_and_becomes.is = "Ø";
this.word_analysis.cg_is_and_becomes.becomes = "k";
this.word_analysis.cg_explanation = "/!\\ This verb has a consonant gradation in <b><span style=\"text-decoration:underline;\">all the persons</span></b>, " +
      "<span class=\"verb-stem\"> "+this.word_analysis.cg_is_and_becomes.is+" </span> becomes <span class=\"verb-termination\"> "+this.word_analysis.cg_is_and_becomes.becomes+"</span>. /!\\";
}
else {
console.log(base.charAt(base.length-1));
console.log(base);
if (group != 3) {
  switch (base.charAt(base.length-2)) {

      case 'k':
          this.word_analysis.cg_is_and_becomes.is = "k";
          this.word_analysis.cg_is_and_becomes.becomes = "kk";
          break;
      case 'p':
          this.word_analysis.cg_is_and_becomes.is = "p";
          this.word_analysis.cg_is_and_becomes.becomes = "pp";
          break;
      case 't':
          this.word_analysis.cg_is_and_becomes.is = "t";
          this.word_analysis.cg_is_and_becomes.becomes = "tt";
          break;
      case 'v':
          this.word_analysis.cg_is_and_becomes.is = "v";
          this.word_analysis.cg_is_and_becomes.becomes = "p";
          break;
      case 'd':
          this.word_analysis.cg_is_and_becomes.is = "d";
          this.word_analysis.cg_is_and_becomes.becomes = "t";
          break;
      case 'g':
          if (base.charAt(base.length-3)=='n') {
              this.word_analysis.cg_is_and_becomes.is = "ng";
              this.word_analysis.cg_is_and_becomes.becomes = "nk";
          }
          break;
      case 'm':
          if (base.charAt(base.length-3)=='m') {
              this.word_analysis.cg_is_and_becomes.is = "mm";
              this.word_analysis.cg_is_and_becomes.becomes = "mp";
          }
          break;
      case 'l':
          if (base.charAt(base.length-3)=='l') {
              this.word_analysis.cg_is_and_becomes.is = "ll";
              this.word_analysis.cg_is_and_becomes.becomes = "lt";
          }
          break;
      case 'n':
          if (base.charAt(base.length-3)=='n') {
              this.word_analysis.cg_is_and_becomes.is = "nn";
              this.word_analysis.cg_is_and_becomes.becomes = "nt";
          }
          break;
      case 'r':
          if (base.charAt(base.length-3)=='r') {
              this.word_analysis.cg_is_and_becomes.is = "rr";
              this.word_analysis.cg_is_and_becomes.becomes = "rt";
          }
          break;
      case 'j':
          if(base.charAt(base.length-3)=='l') {
              this.word_analysis.cg_is_and_becomes.is = "lj";
              this.word_analysis.cg_is_and_becomes.becomes = "lk";
          }
          else if (base.charAt(base.length-3)=='r'){
              this.word_analysis.cg_is_and_becomes.is = "rj";
              this.word_analysis.cg_is_and_becomes.becomes = "rk";
          }
          else if (base.charAt(base.length-3)=='h'){
              this.word_analysis.cg_is_and_becomes.is = "hje";
              this.word_analysis.cg_is_and_becomes.becomes = "hke";
          }
          break;
  }
}
else {
  if( (base.length > 3) && ((base.charAt(base.length-1)) == 'l')) {
      switch (base.charAt(base.length-3)) {
          case 'k':
              this.word_analysis.cg_is_and_becomes.is = "k";
              this.word_analysis.cg_is_and_becomes.becomes = "kk";
              break;
          case 'p':
              this.word_analysis.cg_is_and_becomes.is = "p";
              this.word_analysis.cg_is_and_becomes.becomes = "pp";
              break;
          case 't':
              this.word_analysis.cg_is_and_becomes.is = "t";
              this.word_analysis.cg_is_and_becomes.becomes = "tt";
              break;
          case 'v':
              this.word_analysis.cg_is_and_becomes.is = "v";
              this.word_analysis.cg_is_and_becomes.becomes = "p";
              break;
          case 'd':
              this.word_analysis.cg_is_and_becomes.is = "d";
              this.word_analysis.cg_is_and_becomes.becomes = "t";
              break;
          case 'g':
              if (base.charAt(base.length-4)=='n') {
                  this.word_analysis.cg_is_and_becomes.is = "ng";
                  this.word_analysis.cg_is_and_becomes.becomes = "nk";
              }
              break;
          case 'm':
              if (base.charAt(base.length-4)=='m') {
                  this.word_analysis.cg_is_and_becomes.is = "mm";
                  this.word_analysis.cg_is_and_becomes.becomes = "mp";
              }
              break;
          case 'l':
              if (base.charAt(base.length-4)=='l') {
                  this.word_analysis.cg_is_and_becomes.is = "ll";
                  this.word_analysis.cg_is_and_becomes.becomes = "lt";
              }
              break;
          case 'n':
              if (base.charAt(base.length-4)=='n') {
                  this.word_analysis.cg_is_and_becomes.is = "nn";
                  this.word_analysis.cg_is_and_becomes.becomes = "nt";
              }
              break;
          case 'r':
              if (base.charAt(base.length-4)=='r') {
                  this.word_analysis.cg_is_and_becomes.is = "rr";
                  this.word_analysis.cg_is_and_becomes.becomes = "rt";
              }
              break;
          case 'j':
              if(base.charAt(base.length-4)=='l') {
                  this.word_analysis.cg_is_and_becomes.is = "lj";
                  this.word_analysis.cg_is_and_becomes.becomes = "lk";
              }
              else if (base.charAt(base.length-4)=='r'){
                  this.word_analysis.cg_is_and_becomes.is = "rj";
                  this.word_analysis.cg_is_and_becomes.becomes = "rk";
              }
              else if (base.charAt(base.length-4)=='h'){
                  this.word_analysis.cg_is_and_becomes.is = "hje";
                  this.word_analysis.cg_is_and_becomes.becomes = "hke";
              }
              break;
      }
  } //ajatella and co case
}

if(this.word_analysis.cg_is_and_becomes.is!=""){
  this.word_analysis.cg_explanation = "/!\\ This verb might have a consonant gradation in <b><span style=\"text-decoration:underline;\">all the persons</span></b>, " +
      "<span class=\"verb-stem\"> "+this.word_analysis.cg_is_and_becomes.is+" </span> would become <span class=\"verb-termination\"> "+this.word_analysis.cg_is_and_becomes.becomes+"</span> if that is the case. /!\\";

}
}

}

contains(a, obj) {
for (let i = 0; i < a.length; i++) {
if (a[i] === obj) {
  return true;
}
}
return false;
}

is_group_1() {
return /^[äÄöÖA-Za-z]+[aoueiäöy][aä]$/.test(this.input);
}

is_group_2() {
return /^[äÄöÖA-Za-z]+d[aä]$/.test(this.input);
}

is_group_3() {
return /^[äÄöÖA-Za-z]+(st|[nlr])[aä]$/.test(this.input);
}

is_group_4() {
return /^[äÄöÖA-Za-z]+[aouäöy]t[aä]$/.test(this.input); //some -eta/ä fall here, if they are not part of the list. it goes to group 6
}

is_group_5_or_4() {
return /^[äÄöÖA-Za-z]+it[aä]$$/.test(this.input); //some -ita/ä fall here, if they are not part of the list. it goes to group 6
}

is_group_6_or_4() {
return /^[äÄöÖA-Za-z]+et[aä]$/.test(this.input);
}

attribute_regular_verb_group() {
let word = this.input;

if (this.is_group_1()) {
this.word_analysis.groupnb = 1;
this.word_analysis.explanation = "Verbs from the 1st group end in the following way : -<b class=\"underlined\"><span class=\"verb-stem\">V</span>a</b>/-<b class=\"underlined\"><span class=\"verb-stem\">V</span>ä</b>";
}
else if (this.is_group_2()) {
this.word_analysis.groupnb = 2;
this.word_analysis.explanation = "Verbs from the 2nd group end in the following way : -<b class=\"underlined\">da</b>/-<b class=\"underlined\">dä</b>";
}
else if (this.is_group_3()) {
this.word_analysis.groupnb = 3;
this.word_analysis.explanation = "Verbs from the 3rd group end in the following way : -<b class=\"underlined\">la</b>/-<b class=\"underlined\">lä</b>, -<b class=\"underlined\">na</b>/-<b class=\"underlined\">nä</b>, -<b class=\"underlined\">ra</b>/-<b class=\"underlined\">rä</b> or -<b class=\"underlined\">sta</b>/-<b class=\"underlined\">stä</b>";
}
else if (this.is_group_4()) {
this.word_analysis.groupnb = 4;
this.word_analysis.explanation = "Verbs from the 4th group end in the following way : -<b class=\"underlined\"><span class=\"verb-stem\">V</span>ta</b>/-<b class=\"underlined\"><span class=\"verb-stem\">V</span>tä</b>. However, ~80% of the verbs ending in -ita/itä and -eta/etä are part of the 5th and 6th group";
}
else if (this.is_group_5_or_4()) {

if (word == 'eritä' || word == 'hävitä' || word == 'hellitä' || word == 'hirvitä' || word == 'huolita' || word == 'laastita' || word == 'levitä' || word == 'lämmitä' || word == 'pehmitä' || word == 'selitä' || word == 'selvitä' || word == 'siitä' || word == 'silitä' || word == 'solmita' || word == 'viritä') {
this.word_analysis.groupnb = 4;
this.word_analysis.explanation = "This verb is part of the verbs of the 4th group ending in -<b class=\"underlined\">ita</b>/-<b class=\"underlined\">itä</b>. Approximately 20% of them are part of this group";
}
else {
this.word_analysis.groupnb = 5;
this.word_analysis.explanation = "Verbs from the 5th group end in the following way : -<b class=\"underlined\">ita</b>/-<b class=\"underlined\">itä</b>";
}
}
else if (this.is_group_6_or_4()) {

if (word == 'haljeta' || word == 'heretä' || word == 'herjetä' || word == 'hirvetä' || word == 'hävetä' || word == 'juljeta' || word == 'kammeta' || word == 'kangeta' || word == 'kasketa' || word == 'katketa' || word == 'kehjetä' || word == 'keretä' || word == 'kerjetä' || word == 'kiivetä' || word == 'kivetä' || word == 'korveta' || word == 'langeta' || word == 'laueta' || word == 'livetä' || word == 'lohjeta' || word == 'lumeta' || word == 'nimetä' || word == 'noeta' || word == 'pietä' || word == 'poiketa' || word == 'puhjeta' || word == 'ratketa' || word == 'raueta' || word == 'revetä' || word == 'ristetä' || word == 'ruveta' || word == 'sietä' || word == 'sumeta' || word == 'teljetä' || word == 'todeta' || word == 'tuketa' || word == 'vyyhdetä' || word == 'ängetä' ) {
this.word_analysis.groupnb = 4;
this.word_analysis.explanation = "This verb is part of the verbs of the 4th group ending in -<b class=\"underlined\">eta</b>/-<b class=\"underlined\">etä</b>. Approximately 20% of them are part of this group";
}
else {
this.word_analysis.groupnb = 6;
this.word_analysis.explanation = "Verbs from the 6th group end in the following way : -<b class=\"underlined\">eta</b>/-<b class=\"underlined\">etä</b>";
}
}
else
return 0;

return 1;
}

verb_group(input) {
this.input = input.replace(/\s+/g, '');
this.input = this.input.toLowerCase();

this.word_analysis.inf = "";
this.word_analysis.explanation = "";
this.word_analysis.groupnb = 0;
this.word_analysis.attr = "";
this.word_analysis.ir_explanation = "";
this.word_analysis.cg_explanation = "";
this.word_analysis.cg_is_and_becomes.is = "";
this.word_analysis.cg_is_and_becomes.becomes = "";

this.word_analysis.inf = this.input;

if(this.check_input_is_word) {
if (this.is_defective_verb()) {
  this.word_analysis.groupnb = -1;
  this.word_analysis.attr = "def";
  this.word_analysis.explanation = "This verb is a defective verb. We suggest you to use the following instead : "+this.word_analysis.inf;
}
else {
  this.is_irregular_verb();
  this.attribute_regular_verb_group();
  this.has_consonant_gradation();
}
return 1;
}
else
return 0;

}
}
