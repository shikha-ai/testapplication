import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestComponents';
  x: string;
  y: string;
  constructor(){
    this.x = 'ddfes';
    this.y = '5601';
  }
}
