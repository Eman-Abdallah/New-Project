import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 heading:string=` <span class="not-masked">
<span >MAKING</span>                           
<br>
<span  class="text-primary">GOOD</span>  
<br>
<span class="class=" text-primary">SHIT</span>  
<br>
<span >SINCE</span>
<br>
<span >2009</span>
</span>`
  constructor() { }

  ngOnInit(): void {
  }
  handleTextHover(){    
    this.heading=`
    <span class="masked">
<span >HIDING</span>                           
<br>
<span >BAD</span>  
<br>
<span >SHIT</span>  
<br>
<span >SINCE</span>
<br>
<span >2009</span>
</span>
    `
    document.querySelector('.circle')?.classList.add('circle-hovered');
  }
  removeClass(){
    document.querySelector('.circle')?.classList.remove('circle-hovered');
    this.heading=` <span class="not-masked">
    <span >MAKING</span>                           
    <br>
    <span class=" text-primary">GOOD</span>  
    <br>
    <span class=" text-primary">SHIT</span>  
    <br>
    <span >SINCE</span>
    <br>
    <span >2009</span>
    </span>`
  }


}