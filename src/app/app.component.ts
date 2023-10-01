import { Component, ElementRef, HostListener, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positionX: number = 0;
  positionY: number = 0;
  handleMouseMove(event: MouseEvent) {
    this.positionX = event.clientX;
    this.positionY = event.clientY+100;
  }
  ngOnInit() {
 
  }

  
}


