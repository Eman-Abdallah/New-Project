import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  experience:string=`
  <p class="line">Over <strong class="text-primary">a decade </strong>  experience</p> 
  <p class="line"> interactive design and </p>
  <p class="line"> working with some of the most </p>
  <p class="line">talented people in the business</p>
`
clients:string=  `
<p class="line">| worked with some of the most </p> 
<p class="line"> <strong class="text-primary">innovative</strong> industry leaders to help </p>
<p class="line"> build their top-notch products </p>
`
  constructor() { }

  ngOnInit(): void {
  }
  handleTextHover(){    
    this.experience=`
    <p class="line">Only <strong class="">seven years </strong>  of activity</p> 
    <p class="line"> producing good shit. other year </p>
    <p class="line"> were me messing around and </p>
    <p class="line">navigating through my career</p>
  `
  this.clients=`
  <p class="line">I was only a small part of a large</p> 
    <p class="line"> team. they probably have no </p>
    <p class="line">idea exist.</p>
  `
    document.querySelector('.circle')?.classList.add('circle-hovered');
  }
  removeClass(){
    document.querySelector('.circle')?.classList.remove('circle-hovered');
 this.experience=  `
 <p class="line">Over <strong class="text-primary">a decade </strong>  experience</p> 
 <p class="line"> interactive design and </p>
 <p class="line"> working with some of the most </p>
 <p class="line">talented people in the business</p>
 `
 this.clients=  `
 <p class="line">| worked with some of the most </p> 
 <p class="line"> <strong class="text-primary">innovative</strong> industry leaders to help </p>
 <p class="line"> build their top-notch products </p>
 `
  }

}
