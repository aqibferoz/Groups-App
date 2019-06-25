import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-group4',
  templateUrl: './group4.page.html',
  styleUrls: ['./group4.page.scss'],
})
export class Group4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayMore(){
    this.router.navigate(['constgradation'])
  }
}
