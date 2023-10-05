import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  heading: string = ` `
  constructor() { }

  ngOnInit(): void {
  }
  handleTextHover() {
    this.heading = `

    `
    document.querySelector('.ball')?.classList.add('ball-hovered');
  }
  removeClass() {
    document.querySelector('.ball')?.classList.remove('ball-hovered');
    this.heading = ` <span class="not-masked">
    <span class="slide-text">MAKING</span>                           
    <br>
    <span class="slide-text text-primary">GOOD</span>  
    <br>
    <span class="slide-text text-primary">SHIT</span>  
    <br>
    <span class="slide-text">SINCE</span>
    <br>
    <span class="slide-text">2009</span>
    </span>`
  }


}
