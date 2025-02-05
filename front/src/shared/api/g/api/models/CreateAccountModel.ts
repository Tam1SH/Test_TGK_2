/* tslint:disable */
/* eslint-disable */
/**
 * back, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Currency } from './Currency';
import {
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface CreateAccountModel
 */
export interface CreateAccountModel {
    /**
     * 
     * @type {Currency}
     * @memberof CreateAccountModel
     */
    currency?: Currency;
}

/**
 * Check if a given object implements the CreateAccountModel interface.
 */
export function instanceOfCreateAccountModel(value: object): value is CreateAccountModel {
    return true;
}

export function CreateAccountModelFromJSON(json: any): CreateAccountModel {
    return CreateAccountModelFromJSONTyped(json, false);
}

export function CreateAccountModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAccountModel {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'] == null ? undefined : CurrencyFromJSON(json['currency']),
    };
}

export function CreateAccountModelToJSON(value?: CreateAccountModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currency': CurrencyToJSON(value['currency']),
    };
}

