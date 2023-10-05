import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {








  constructor() { }

  ngOnInit(): void {
    const demoDiv: any = document.querySelector("#scaled-video");
    demoDiv.muted="muted";
    window.addEventListener('scroll', () => {
      if (pageYOffset * 0.0001 > 1 || pageYOffset * 0.0001 < 0.2) { return; }
      else { demoDiv.setAttribute('style', 'transform: scale(' + pageYOffset * 0.00019 + ');'); }
    });
  }

  handleTextHover() {


    document.querySelector('.ball')?.classList.add('ball-hovered');
  }
  removeClass() {
    document.querySelector('.ball')?.classList.remove('ball-hovered');


  }

}
