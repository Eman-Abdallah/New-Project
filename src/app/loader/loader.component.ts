import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
percent :number=0;
showLoader:boolean=true;
startWebpage:boolean=true;
@Output() loader = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  var i=  setInterval(() => {
this.percent++
if(this.percent == 100) {
  clearInterval(i);
  this.showLoader=false;
}
    }, 25.5);
  }
  startProject(){
    this.startWebpage=false;
    this.loader.emit(false);
  }
}
