import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
src!: string;
isPaused = false;
  ngOnInit() {
  }
  onPlayClick(e:Event,audio: HTMLAudioElement) {

    e.preventDefault();
    if(!this.isPaused){
      audio.play();
      this.isPaused = !this.isPaused;
    }else{
      audio.pause();
    }

    
   }
   
    onPause() {
     this.isPaused = false;
    }

}
function ViewChildren(arg0: string): (target: AudioComponent, propertyKey: "audioElms") => void {
  throw new Error('Function not implemented.');
}

