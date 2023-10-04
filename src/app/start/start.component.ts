import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  startWebpage:boolean=true;
  @Output() loader = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  startProject(){
    this.startWebpage=false;
    this.loader.emit(false);
  }
}
