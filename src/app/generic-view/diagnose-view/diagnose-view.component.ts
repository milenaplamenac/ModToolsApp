import { Component, OnInit, Input } from '@angular/core';
import { TextClassifiedOutput } from 'projects/api-generated-client/src';
import { ApiDataService } from 'src/app/shared-components/api-data.service';
import { IProcessedToken } from '../processed-token/iprocessed-token';
import { IProcessedTextClassifiedOutput } from './iprocessed-textclassifiedoutput';
import { PolicyGuides, Topics } from 'src/constants';
import { IProcessedTopic } from '../processed-topic/iprocessed-topic';


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
    topics: [],
    policyGuides: []
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
    let processCompleteTextData = this.processTopic(apiResponse.topics, true);
    let result: IProcessedTextClassifiedOutput = {
      text: apiResponse.text,
      words: [],
      predictions: this.processPrediction(apiResponse.predictions),
      topics: processCompleteTextData.topics,
      policyGuides: processCompleteTextData.policyGuides
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
            topics: this.processTopic(extendedItemToken.topics, false).topics
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
          if (!tokenExists) {
            currentTokens.push({
              text: extendedItemToken.text,
              topics: this.processTopic(extendedItemToken.topics, false).topics
            });
          }

        })
      }
      else {
        // If text of currentToken == solution, put the token on the first place 
        this.sortTokens(currentTokens, currentSolution);

        // Current solution is different from solution in current iteration 
        // -> currentSolution, currebtOriginal and currentTokens = data from current iteration 
        result.words.push({
          original: currentOriginal,
          solution: currentSolution,
          tokens: currentTokens
        });

        currentSolution = extendedItem.solution;
        currentOriginal = extendedItem.original;
        currentTokens = [];
        extendedItem.tokens.forEach(extendedItemToken => {
          currentTokens.push({
            text: extendedItemToken.text,
            topics: this.processTopic(extendedItemToken.topics, false).topics
          })
        })
      }
    })

    // If text of currentToken == solution, put the token on the first place 
    this.sortTokens(currentTokens, currentSolution);

    // Push last created processed data
    result.words.push({
      original: currentOriginal,
      solution: currentSolution,
      tokens: currentTokens
    })

    return result;
  }

  processTopic(topic: any, processPolicies: boolean) {
    var result = {
      'topics': [],
      'policyGuides': []
    }

    result.topics = Object.keys(topic).map(function (key) {
      return { topic: Topics[key], value: topic[key] as number } as IProcessedTopic;
    });

    // if processPolicies => return them processed also (this will be the case when processing full text topics)

    if (processPolicies) {
      let processedPolicies: any[] = [];

      PolicyGuides.forEach(
        guide => {
          let policySecure = true;
          guide.policyTrasholds.some(function (trashold) {

            let currentTopic = result.topics.filter(item => item.topic.name == trashold.topic['name'])[0];
            if (currentTopic && trashold.value <= currentTopic.value) {
              policySecure = false;
              return true;
            }
          })

          processedPolicies.push({
            'policy': guide.policy,
            'policySecure': policySecure
          });
        }
      )

      result.policyGuides = processedPolicies;
    }

    return result;
  }

  processPrediction(prediction: any) {
    var result = Object.keys(prediction).map(function (key) {
      return { name: key.split('_')[1], value: (prediction[key] as number) * 100 };
    });
    return result;
  }

  sortTokens(tokens: IProcessedToken[], solution: string) {
    let indexOfSolutionToken = tokens.map(token => { return token.text }).indexOf(solution);
    let solutionToken = tokens[indexOfSolutionToken];
    tokens.splice(indexOfSolutionToken, 1);
    tokens.unshift(solutionToken);
  }

}
