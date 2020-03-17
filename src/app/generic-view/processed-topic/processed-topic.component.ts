import { Component, OnInit, Input } from '@angular/core';
import { Topics } from 'src/constants';

@Component({
  selector: 'processed-topic',
  templateUrl: './processed-topic.component.html',
  styleUrls: ['./processed-topic.component.less']
})
export class ProcessedTopicComponent implements OnInit {

  @Input()
  processedTopic: any[];

  topicName: string;
  topicIcon: string;

  bgColor: string;
  fgColor: string;
  borderColor: string;

  constructor() { }

  // In this component we is  missing full logic

  ngOnInit(): void {
    this.setColors();
    this.topicName = Topics[(this.processedTopic[0]).toString()].name;
    // Icon processing should be separate and should be done according to all possible cases
    this.topicIcon = Topics[(this.processedTopic[0]).toString()].icon.replace('${risk}', this.processedTopic[1]);
  }

  setColors() {
    // Colors should have some logic and sense, but let them make static for now, and put very simple logic for borders
    this.bgColor = '#212121';
    this.fgColor = 'whitesmoke';
    this.borderColor = this.processedTopic[1] > 5 ? 'red' : this.processedTopic[1] > 3 ? 'orange' : 'green';
  }

}
