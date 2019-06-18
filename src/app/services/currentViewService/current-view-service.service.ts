import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentViewServiceService {
  
  public lastsearchverb :string;
  public currentPageTitle: string;
   //public currentheader: boolean;
   //public currentnumberlessons: number;
   //public currentlevellessons: number;
   constructor(){

       this.currentPageTitle="Group Finder";
       this.lastsearchverb="";
       //this.currentnumberlessons=0;
       //this.currentheader=false;

}
}
