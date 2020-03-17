import { IProcessedWord } from '../processed-word/iprocessed-word';

export interface IProcessedTextClassifiedOutput{
    text: string,
    topics: any[][],
    predictions: any[],
    words: IProcessedWord[]
}