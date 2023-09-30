import { Component, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren('audio') audioElms!: ElementRef;
src!: string;
isPaused = false;
  ngOnInit(): void {
    var sound=document.querySelector('audio');
    if(sound){
      sound.play();
    }
  }
  onPlayClick(audio: HTMLAudioElement) {
    if (!this.isPaused) {
     audio.play();
     this.isPaused = true;
    } else {
     audio.pause();
     this.isPaused = false;
    }
   }
   
    onPause() {
     this.isPaused = false;
    }
}


