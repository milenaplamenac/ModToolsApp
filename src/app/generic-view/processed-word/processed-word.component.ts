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

  mouseOverProcessedWord: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
