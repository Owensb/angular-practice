import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    console.log("clicked!");
    this._opened = !this._opened;
  }

  constructor() { }

  ngOnInit() {
  }

}
