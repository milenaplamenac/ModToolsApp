/**
 * Classify text into risk scores
 * Will take text and classify it via risk  
 *
 * OpenAPI spec version: 2.0.1
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FailingFragment } from './failingFragment';
// import { HttpsapiSwaggerhubComapistwohatshared200componentsschemasLanguageCode } from './httpsapiSwaggerhubComapistwohatshared200componentsschemasLanguageCode';
// import { HttpsapiSwaggerhubComapistwohatshared200componentsschemasTopics } from './httpsapiSwaggerhubComapistwohatshared200componentsschemasTopics';
// import { ModelObject } from './modelObject';
import { PreField } from './preField';
import { RedactedTextField } from './redactedTextField';
import { Slots } from './slots';
import { TextField } from './textField';

export interface TextClassifiedOutput { 
    /**
     * If extended=true in the request it will output the longer details of all things it considered.  This is quite a bit more costly in latency and CPU to run so we advise to only call it when needed.  As such it will be billed as 2 requests instead of one.
     */
    extended?: Array<Slots>;
    /**
     * Which parts of the text failed the filter.
     */
    failingFragments?: Array<FailingFragment>;
    language?: string //HttpsapiSwaggerhubComapistwohatshared200componentsschemasLanguageCode;
    //pre?: PreField;
    predictions?: Object
    /**
     * FUTURE | Occasionally we may run AI on certain users to check for things like grooming, suidice, sextortion and other conversation items.  This will have any predictions that have been so far.
     */
    // predictions?: { [key: string]: ModelObject; };
    /**
     * If true this means this text has been redacted and pseudonymized for privacy and compliance reasons.  By default we store the original text for 14 days so moderators can moderate it then redact and pseudonymize it for long term storage.
     */
    pseudonmized?: boolean;
    /**
     * Which rules where used.  This is typically rules >= 3 or rules that have been edited in the last 14 days for quality control reasons.
     */
    recentRules?: Array<string>;
    redactedText?: RedactedTextField;
    /**
     * The simplified form of the text.  Typically lowercase, without symbols and using any matching spellings or internal codes like {{full_name}}
     */
    simplified?: string;
    text?: TextField;
    topics?: Object//Array<number> //HttpsapiSwaggerhubComapistwohatshared200componentsschemasTopics;
}