import { IProcessedWord } from '../processed-word/iprocessed-word';
import { IProcessedPolicyGuide } from '../processed-policy-guide/iprocessed-policy-guide';

export interface IProcessedTextClassifiedOutput{
    text: string,
    topics: any[][],
    predictions: any[],
    words: IProcessedWord[]
    policyGuides: IProcessedPolicyGuide[]
}