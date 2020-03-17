import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextInputChangedService {

  private textInputLanguageEmitter = new BehaviorSubject<string>(null);
  getTextInputLanguage = this.textInputLanguageEmitter.asObservable();

  private textInputContentTypeEmitter = new BehaviorSubject<string>(null);
  getTextInputContentType = this.textInputContentTypeEmitter.asObservable();

  private textInputClientEmitter = new BehaviorSubject<string>(null);
  getTextInputClient = this.textInputClientEmitter.asObservable();

  private textInputTextEmitter = new BehaviorSubject<string>(null);
  getTextInputText = this.textInputTextEmitter.asObservable();

  constructor() { }

  emitLanguageData(data: string) {
    this.textInputLanguageEmitter.next(data);
  }

  emitContentTypeData(data: string) {
    this.textInputContentTypeEmitter.next(data);
  }

  emitClientData(data: string) {
    this.textInputClientEmitter.next(data);
  }

  emitTextData(data: string) {
    this.textInputTextEmitter.next(data);
  }

}
