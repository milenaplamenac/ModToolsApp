import { Component, OnInit, Input } from '@angular/core';
import { IProcessedWord } from './iprocessed-word';

@Component({
  selector: 'processed-word',
  templateUrl: './processed-word.component.html',
  styleUrls: ['./processed-word.component.less']
})
export class ProcessedWordComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  processedWord: IProcessedWord;

  // @Input()
  bgColor: string;
  
  // @Input()
  fgColor: string;

  mouseOverProcessedWord: boolean = false; 

  constructor() { }

  ngOnInit(): void {
    this.setColors();
  }

  setColors() {
    // I suppose there is a logic regarding colors, but for now lets make them static
    if(this.type == 'original')
    {
      this.bgColor = "#292929";
      this.fgColor = "whitesmoke";
    }
    else{
      this.bgColor = "#e0ebd8";
      this.fgColor = "#212121";
    }
    
  }

}
