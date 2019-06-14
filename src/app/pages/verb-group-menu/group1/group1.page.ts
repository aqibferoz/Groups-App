import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-group1',
  templateUrl: './group1.page.html',
  styleUrls: ['./group1.page.scss'],
})
export class Group1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  displayMore(){
    this.router.navigate(['constgradation'])
  }
}
