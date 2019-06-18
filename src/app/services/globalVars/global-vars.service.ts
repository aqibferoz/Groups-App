import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  user_actions_counter: number;

  constructor() {
    this.user_actions_counter=0;
  }

  setUACounter(value) {
    this.user_actions_counter = value;
  }

  getUACounter() {
    return this.user_actions_counter;
  }
}
