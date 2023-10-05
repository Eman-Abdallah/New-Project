import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import SplitType from 'split-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positionX: number = 0;
  positionY: number = 0;
  loader: boolean = true;
  @ViewChild('ball') ballRef!: ElementRef;
  handleMouseMove(event: MouseEvent) {
    this.positionX = event.clientX;
    this.positionY = event.clientY;
  }
  ngOnInit() {

  }
  ngAfterViewInit(): void {
    if (this.ballRef) {
      const ball = this.ballRef.nativeElement;

      gsap.set(ball, { xPercent: -50, yPercent: -50 });
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.08;

      const xSet = gsap.quickSetter(ball, "x", "px");
      const ySet = gsap.quickSetter(ball, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
    }
  }
  addItem(e: any) {
    this.loader = e;
  }


}


