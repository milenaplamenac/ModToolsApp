import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ISelectOption } from './iselect-option';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.less']
})
export class CustomSelectComponent implements OnInit {

  @Input()
  defaultSelectOption: ISelectOption;

  @Input()
  options: ISelectOption[];

  @Output() selectChanged = new EventEmitter<ISelectOption>();

  showOptions: boolean = false;

  mouseOverCustomSelect: boolean = false;

  selectedOption: ISelectOption;

  constructor() { }
  
  ngOnInit(): void {
    this.selectedOption = this.defaultSelectOption ? this.defaultSelectOption : this.options[0];
  }

  setSelectedOption(option){
    this.selectedOption = option;
    this.selectChanged.emit(this.selectedOption);
  }

}
