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
//import { HttpsapiSwaggerhubComapistwohatshared200componentsschemasPrediction } from './httpsapiSwaggerhubComapistwohatshared200componentsschemasPrediction';

import { Prediction } from './prediction';

export interface LanguageClassifiedOutput { 
    //predictions?: Array<HttpsapiSwaggerhubComapistwohatshared200componentsschemasPrediction>;
    predictions?: Array<Prediction>;
}