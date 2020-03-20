import { Component, OnInit, Input } from '@angular/core';
import { IProcessedToken } from './iprocessed-token';

@Component({
  selector: 'processed-token',
  templateUrl: './processed-token.component.html',
  styleUrls: ['./processed-token.component.less']
})
export class ProcessedTokenComponent implements OnInit {

  @Input()
  processedToken: IProcessedToken;

  @Input()
  applyLightStyle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
