import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
SwiperCore.use([Navigation, Thumbs]);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  thumbsSwiper: any;
  motto: string = `
  <p class="line"> GOOD DESIGN</p>
  <p class="line"> IS HONEST</p>
  `;
  name: string = 'Dieter Rams';
  constructor() { }

  ngOnInit(): void {

  }
  handleTextHover() {
    this.motto = `
    <p class="line"> Not all</p> 
    <p class="line"> Honest design </p>
    <p class="line"> is good </p>
  `;
    this.name = 'Minh Pham'
    document.querySelector('.ball')?.classList.add('ball-hovered');
  }
  removeClass() {
    document.querySelector('.ball')?.classList.remove('ball-hovered');
    this.motto = `
 <p class="line"> GOOD DESIGN</p>
  <p class="line"> IS HONEST</p>
 `;
    this.name = 'Dieter Rams';

  }
}
