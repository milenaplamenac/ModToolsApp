import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DefaultService, TextClassifiedOutput, TextInput } from 'projects/api-generated-client/src';
import { ApiDataService } from 'src/app/shared-components/api-data.service';
import { TextInputChangedService } from 'src/app/generic-view/text-input-changed.service';

@Component({
   selector: 'main-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

   @Output()
   apiResponseReceived: EventEmitter<TextClassifiedOutput> = new EventEmitter();

   text: string;
   language: string;
   contentType: string;
   client: string;

   constructor(private defaultService: DefaultService,
      private apiDataService: ApiDataService,
      private textInputChanged: TextInputChangedService) { }

   ngOnInit() {
      this.textInputChanged.getTextInputLanguage.subscribe(
         data => { this.language = data; }
      )

      this.textInputChanged.getTextInputContentType.subscribe(
         data => { this.contentType = data; }
      )

      this.textInputChanged.getTextInputClient.subscribe(
         data => { this.client = data; }
      )
   }

   callApi(e) {
      // Emit data, so refresh has 'up to date' text 
      this.textInputChanged.emitTextData(e.target.value);

      // construct request to api
      let request: TextInput = {
         clientId: +this.client,
         language: this.language,
         text: this.text,
         contentType: this.contentType as TextInput.ContentTypeEnum
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
