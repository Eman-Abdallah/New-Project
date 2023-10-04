import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positionX: number = 0;
  positionY: number = 0;
  loader: boolean = true;
  handleMouseMove(event: MouseEvent) {
    this.positionX = event.clientX;
    this.positionY = event.clientY;
  }
  ngOnInit() {

  }

  addItem(e: any) {
    this.loader = e;
  }
}


