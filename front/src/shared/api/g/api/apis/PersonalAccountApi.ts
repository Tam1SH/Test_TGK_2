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


import * as runtime from '../runtime';
import type {
  ApiError,
  CreateAccountModel,
  TransferFundsModel,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CreateAccountModelFromJSON,
    CreateAccountModelToJSON,
    TransferFundsModelFromJSON,
    TransferFundsModelToJSON,
} from '../models/index';

export interface CreatePersonalAccountRequest {
    createAccountModel?: CreateAccountModel;
}

export interface TransferFundsRequest {
    transferFundsModel?: TransferFundsModel;
}

/**
 * 
 */
export class PersonalAccountApi extends runtime.BaseAPI {

    /**
     */
    async createPersonalAccountRaw(requestParameters: CreatePersonalAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/PersonalAccount/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAccountModelToJSON(requestParameters['createAccountModel']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async createPersonalAccount(createAccountModel?: CreateAccountModel, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.createPersonalAccountRaw({ createAccountModel: createAccountModel }, initOverrides);
        return await response.value();
    }

    /**
     */
    async transferFundsRaw(requestParameters: TransferFundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/PersonalAccount/transfer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransferFundsModelToJSON(requestParameters['transferFundsModel']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async transferFunds(transferFundsModel?: TransferFundsModel, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.transferFundsRaw({ transferFundsModel: transferFundsModel }, initOverrides);
        return await response.value();
    }

}
