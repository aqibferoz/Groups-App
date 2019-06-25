import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-group6',
  templateUrl: './group6.page.html',
  styleUrls: ['./group6.page.scss'],
})
export class Group6Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayMore(){
    this.router.navigate(['constgradation'])
  }
}
