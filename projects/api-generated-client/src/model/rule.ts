export interface Rule{
    text: string
    topics: Array<number>
    language: string
    clientId: number
    altSpellings: Array<string>
    altSenses: Array<string>
    leetMapping: Array<string>
    flags: Array<string>
    taskIds: Array<string>
    dateCreated: Date,
    dateUpdated: Date
}