import { Component, OnInit } from '@angular/core';
import { ISelectOption } from '../shared-components/custom-select/iselect-option';
import { Languages, Clients, ContentTypes, DefaultLanguageOverriden, DefaultContentType, DefaultClientOverriden } from 'src/constants';
import { TextInputChangedService } from './text-input-changed.service';
import { TextInput } from 'projects/api-generated-client/src/model/textInput';
import { DefaultService } from 'projects/api-generated-client/src';
import { ApiDataService } from '../shared-components/api-data.service';

@Component({
  selector: 'app-generic-view',
  templateUrl: './generic-view.component.html',
  styleUrls: ['./generic-view.component.less']
})
export class GenericViewComponent implements OnInit {

  languageOptions: ISelectOption[] = Languages.map(language => { return { option: language.name, value: language.code } });
  contentTypeOptions: ISelectOption[] = ContentTypes.map(contentType => { return { option: contentType.name, value: contentType.type } });
  clientOptions: ISelectOption[] = Clients.map(client => { return { option: client.name, value: client.id } });

  defaultLanguageSelectOption: ISelectOption = { option: DefaultLanguageOverriden.name, value: DefaultLanguageOverriden.code }
  defaultContentTypeSelectOption: ISelectOption = { option: DefaultContentType.name, value: DefaultContentType.type };
  defaultClientSelectOption: ISelectOption = { option: DefaultClientOverriden.name, value: DefaultClientOverriden.id };

  selectedLanguage: ISelectOption = this.defaultLanguageSelectOption;
  selectedContentType: ISelectOption = this.defaultContentTypeSelectOption;
  selectedClient: ISelectOption = this.defaultClientSelectOption;

  text: string;

  constructor(private textInputChangedService: TextInputChangedService, private defaultService: DefaultService,
    private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    // Emit default values
    this.textInputChangedService.emitLanguageData(this.defaultLanguageSelectOption.value);
    this.textInputChangedService.emitContentTypeData(this.defaultContentTypeSelectOption.value);
    this.textInputChangedService.emitClientData(this.defaultClientSelectOption.value);

    this.textInputChangedService.getTextInputText.subscribe(
      data => { this.text = data }
    )
  }

  languageChanged(e) {
    // Emit should happen right now because of Search component
    this.textInputChangedService.emitLanguageData(e.value);

    this.selectedLanguage = e;
  }

  contentTypeChanged(e) {
    // Emit should happen right now because of Search component
    this.textInputChangedService.emitContentTypeData(e.value);

    this.selectedContentType = e;
  }

  clientChanged(e) {
    // Emit should happen right now because of Search component
    this.textInputChangedService.emitClientData(e.value);

    this.selectedClient = e;
  }

  callApi() {
    let request: TextInput = {
      clientId: +this.selectedClient.value,
      language: this.selectedLanguage.value,
      text: this.text,
      contentType: this.selectedContentType.value as TextInput.ContentTypeEnum
    }

    this.defaultService.classifyText(request, true)
      .subscribe(
        data => {
          this.apiDataService.emitNewData(data);
        },
        error => console.log(error)
      );
  }

}
