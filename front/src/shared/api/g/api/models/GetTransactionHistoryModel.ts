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
/**
 * 
 * @export
 * @interface GetTransactionHistoryModel
 */
export interface GetTransactionHistoryModel {
    /**
     * 
     * @type {Date}
     * @memberof GetTransactionHistoryModel
     */
    fromDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetTransactionHistoryModel
     */
    toDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionHistoryModel
     */
    currency?: string;
    /**
     * 
     * @type {number}
     * @memberof GetTransactionHistoryModel
     */
    accountId?: number;
}

/**
 * Check if a given object implements the GetTransactionHistoryModel interface.
 */
export function instanceOfGetTransactionHistoryModel(value: object): value is GetTransactionHistoryModel {
    return true;
}

export function GetTransactionHistoryModelFromJSON(json: any): GetTransactionHistoryModel {
    return GetTransactionHistoryModelFromJSONTyped(json, false);
}

export function GetTransactionHistoryModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTransactionHistoryModel {
    if (json == null) {
        return json;
    }
    return {
        
        'fromDate': json['fromDate'] == null ? undefined : (new Date(json['fromDate'])),
        'toDate': json['toDate'] == null ? undefined : (new Date(json['toDate'])),
        'currency': json['currency'] == null ? undefined : json['currency'],
        'accountId': json['accountId'] == null ? undefined : json['accountId'],
    };
}

export function GetTransactionHistoryModelToJSON(value?: GetTransactionHistoryModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fromDate': value['fromDate'] == null ? undefined : ((value['fromDate'] as any).toISOString()),
        'toDate': value['toDate'] == null ? undefined : ((value['toDate'] as any).toISOString()),
        'currency': value['currency'],
        'accountId': value['accountId'],
    };
}

