import { Component, OnInit, Input } from '@angular/core';
import { IProcessedPrediction } from './iprocessed-prediction';

@Component({
  selector: 'processed-prediction',
  templateUrl: './processed-prediction.component.html',
  styleUrls: ['./processed-prediction.component.less']
})
export class ProcessedPredictionComponent implements OnInit {

  @Input()
  processedPrediction: IProcessedPrediction;

  constructor() { }

  ngOnInit(): void {
  }

}
