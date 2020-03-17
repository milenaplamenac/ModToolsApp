import { IProcessedToken } from '../processed-token/iprocessed-token';

export interface IProcessedWord{
    original: string
    solution: string
    tokens: IProcessedToken[]
}

