import { Component, OnInit, Input } from '@angular/core';
import { TextClassifiedOutput } from 'projects/api-generated-client/src';
import { ApiDataService } from 'src/app/shared-components/api-data.service';
import { IProcessedToken } from '../processed-token/iprocessed-token';
import { IProcessedTextClassifiedOutput } from './iprocessed-textclassifiedoutput';


@Component({
  selector: 'diagnose-view',
  templateUrl: './diagnose-view.component.html',
  styleUrls: ['./diagnose-view.component.less']
})
export class DiagnoseViewComponent implements OnInit {

  data: IProcessedTextClassifiedOutput = {
    text: "", 
    words: [], 
    predictions: [], 
    topics: []
  };

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.apiDataService.getTextClassifiedOutput.subscribe(
      (apiResponse: TextClassifiedOutput) => {
        if (apiResponse != null)
          this.data = this.processApiResponse(apiResponse);
      }
    )
  }


  // Take DB response and transform into object that fits best 
  processApiResponse(apiResponse: TextClassifiedOutput) {
    let result: IProcessedTextClassifiedOutput = {
      text: apiResponse.text,
      words: [],
      predictions: this.processPrediction(apiResponse.predictions),
      topics: this.processTopic(apiResponse.topics)
    };

    // Iterate through extended
    let currentSolution: string;
    let currentOriginal: string;
    let currentTokens: IProcessedToken[] = [];

    apiResponse.extended?.forEach(extendedItem => {
      // We are on start -> first iteration
      if (currentSolution == null) {
        currentSolution = extendedItem.solution;
        currentOriginal = extendedItem.original;
        extendedItem.tokens.forEach(extendedItemToken => {
          currentTokens.push({
            text: extendedItemToken.text,
            topics: this.processTopic(extendedItemToken.topics)
          })
        })
      }
      // If current solution is same as solution in current iteration 
      // -> append original and solution 
      // -> if token does not exist add it to tokens
      else if (extendedItem.solution == currentSolution) {
        currentOriginal = currentOriginal + " " + extendedItem.original;
        extendedItem.tokens.forEach(extendedItemToken => {
          let tokenExists = currentTokens.find(token => token.text == extendedItemToken.text);
          if (!tokenExists)
            currentTokens.push({
              text: extendedItemToken.text,
              topics: this.processTopic(extendedItemToken.topics)
            })
        })
      }
      else {
        // Current solution is different from solution in current iteration 
        // -> currentSolution, currebtOriginal and currentTokens = data from current iteration 
        result.words.push({
          original: currentOriginal,
          solution: currentSolution,
          tokens: currentTokens
        })

        currentSolution = extendedItem.solution;
        currentOriginal = extendedItem.original;
        currentTokens = [];
        extendedItem.tokens.forEach(extendedItemToken => {
          currentTokens.push({
            text: extendedItemToken.text,
            topics: this.processTopic(extendedItemToken.topics)
          })
        })
      }
    })

    /// Push last created processed data
    result.words.push({
      original: currentOriginal,
      solution: currentSolution,
      tokens: currentTokens
    })

    return result;
  }

  processTopic(topic: any) {
    var result = Object.keys(topic).map(function (key) {
      return [key, topic[key] as number];
    });
    return result;
  }

  processPrediction(prediction: any) {
    var result = Object.keys(prediction).map(function (key) {
      return { name: key.split('_')[1], value: (prediction[key] as number) * 100 };
    });
    return result;
  }

}
