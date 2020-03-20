import { Component, OnInit, Input } from '@angular/core';
import { IProcessedPolicyGuide } from './iprocessed-policy-guide';

@Component({
  selector: 'processed-policy-guide',
  templateUrl: './processed-policy-guide.component.html',
  styleUrls: ['./processed-policy-guide.component.less']
})
export class ProcessedPolicyGuideComponent implements OnInit {

  @Input()
  processedPolicyGuide: IProcessedPolicyGuide;
  
  constructor() { }

  ngOnInit(): void {
  }

}
