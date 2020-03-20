import { Component, OnInit, Input } from '@angular/core';
import { Topics } from 'src/constants';
import { IProcessedToken } from '../processed-token/iprocessed-token';
import { IProcessedTopic } from './iprocessed-topic';

@Component({
  selector: 'processed-topic',
  templateUrl: './processed-topic.component.html',
  styleUrls: ['./processed-topic.component.less']
})
export class ProcessedTopicComponent implements OnInit {

  @Input()
  processedTopic: IProcessedTopic;

  constructor() { }


  ngOnInit(): void {
  }
}
