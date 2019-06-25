import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-group3',
  templateUrl: './group3.page.html',
  styleUrls: ['./group3.page.scss'],
})
export class Group3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayMore(){
    this.router.navigate(['constgradation'])
  }
}
