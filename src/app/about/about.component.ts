import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import  ScrollTrigger  from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  typeSplit:any;
  elementRef: any;
  constructor() { }

  ngOnInit(): void {
  }
  handleTextHover() {

    document.querySelector('.ball')?.classList.add('ball-hovered');
  }
  removeClass() {
    document.querySelector('.ball')?.classList.remove('ball-hovered');

}
ngAfterViewInit() {
  this.runSplit();
  this.createAnimation();
}

runSplit() {
  this.typeSplit = new SplitType('.split-line', {
    types: 'lines, words'
  });
}

createAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const lines = document.querySelectorAll('.line');

  lines.forEach((line: any) => {
    const lineMaskElement = document.createElement('div');
    lineMaskElement.classList.add('line-mask');
    line.appendChild(lineMaskElement);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });

    tl.to(line.querySelector('.line-mask'), {
      width: '0%',
      duration: 1.5
    });
  });
}


handleWindowResize() {
  this.typeSplit.revert();
  this.runSplit();
}

}
