import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutText:string=`
  <p class="line">I’m a <strong class="text-primary">selectively skilled</strong>  product</p> 
  <p class="line"> designer with strong focus on </p>
  <p class="line"> producing high quality & </p>
  <p class="line">impactful digital experience.</p>
`

  constructor() { }

  ngOnInit(): void {
  }
  handleTextHover(){    
    this.aboutText=`
    A visual  <strong >Designer-with skills</strong>  that <br>
    haven't been replaced by A.I <br>
    (yet)-making good shit only if   <br>
    the paycheck is equally good.
  `
    document.querySelector('.circle')?.classList.add('circle-hovered');
  }
  removeClass(){
    document.querySelector('.circle')?.classList.remove('circle-hovered');
 this.aboutText=  `
 I’m a <strong class="text-primary">selectively skilled</strong>  product <br>
 designer with strong focus on <br>
 producing high quality & <br>
 impactful digital experience.
 `

  }
}
