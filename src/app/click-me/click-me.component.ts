import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {
  clickMessage : string ="";
  constructor() { }
  onclickMe(){
      this.clickMessage = "You clicked the Button!";
  }
  ngOnInit() {
  }

}
