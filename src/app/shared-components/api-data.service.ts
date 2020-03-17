import { Injectable } from '@angular/core';
import { TextClassifiedOutput } from 'projects/api-generated-client/src';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private textClassifiedOutputEmitter = new BehaviorSubject<TextClassifiedOutput>(null);
  getTextClassifiedOutput = this.textClassifiedOutputEmitter.asObservable();

  constructor() { }

  emitNewData(data: TextClassifiedOutput){
    this.textClassifiedOutputEmitter.next(data);
  }

}
