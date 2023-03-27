/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InvestorDto,
    InvestorDtoFromJSON,
    InvestorDtoToJSON,
    InvestorRegistrationDto,
    InvestorRegistrationDtoFromJSON,
    InvestorRegistrationDtoToJSON,
} from '../models';

export interface AssignStartupUsingPUTRequest {
    investorId: string;
    startupId: string;
}

export interface CreateInvestorUsingPOSTRequest {
    investorRegistrationDto: InvestorRegistrationDto;
}

export interface DeleteInvestorUsingDELETERequest {
    id: string;
}

export interface GetInvestorUsingGETRequest {
    id: string;
}

export interface UpdateInvestorUsingPUTRequest {
    investorDto: InvestorDto;
}

/**
 * 
 */
export class InvestorControllerApi extends runtime.BaseAPI {

    /**
     * Assign startup to investor
     */
    async assignStartupUsingPUTRaw(requestParameters: AssignStartupUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<InvestorDto>> {
        if (requestParameters.investorId === null || requestParameters.investorId === undefined) {
            throw new runtime.RequiredError('investorId','Required parameter requestParameters.investorId was null or undefined when calling assignStartupUsingPUT.');
        }

        if (requestParameters.startupId === null || requestParameters.startupId === undefined) {
            throw new runtime.RequiredError('startupId','Required parameter requestParameters.startupId was null or undefined when calling assignStartupUsingPUT.');
        }

        const queryParameters: any = {};

        if (requestParameters.investorId !== undefined) {
            queryParameters['investorId'] = requestParameters.investorId;
        }

        if (requestParameters.startupId !== undefined) {
            queryParameters['startupId'] = requestParameters.startupId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/investor/assign`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvestorDtoFromJSON(jsonValue));
    }

    /**
     * Assign startup to investor
     */
    async assignStartupUsingPUT(requestParameters: AssignStartupUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<InvestorDto> {
        const response = await this.assignStartupUsingPUTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create investor
     */
    async createInvestorUsingPOSTRaw(requestParameters: CreateInvestorUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<InvestorDto>> {
        if (requestParameters.investorRegistrationDto === null || requestParameters.investorRegistrationDto === undefined) {
            throw new runtime.RequiredError('investorRegistrationDto','Required parameter requestParameters.investorRegistrationDto was null or undefined when calling createInvestorUsingPOST.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/investor`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvestorRegistrationDtoToJSON(requestParameters.investorRegistrationDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvestorDtoFromJSON(jsonValue));
    }

    /**
     * Create investor
     */
    async createInvestorUsingPOST(requestParameters: CreateInvestorUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<InvestorDto> {
        const response = await this.createInvestorUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete investor by id
     */
    async deleteInvestorUsingDELETERaw(requestParameters: DeleteInvestorUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<InvestorDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteInvestorUsingDELETE.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/investor/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvestorDtoFromJSON(jsonValue));
    }

    /**
     * Delete investor by id
     */
    async deleteInvestorUsingDELETE(requestParameters: DeleteInvestorUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<InvestorDto> {
        const response = await this.deleteInvestorUsingDELETERaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get investor by id
     */
    async getInvestorUsingGETRaw(requestParameters: GetInvestorUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<InvestorDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getInvestorUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/investor/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvestorDtoFromJSON(jsonValue));
    }

    /**
     * Get investor by id
     */
    async getInvestorUsingGET(requestParameters: GetInvestorUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<InvestorDto> {
        const response = await this.getInvestorUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update investor
     */
    async updateInvestorUsingPUTRaw(requestParameters: UpdateInvestorUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<InvestorDto>> {
        if (requestParameters.investorDto === null || requestParameters.investorDto === undefined) {
            throw new runtime.RequiredError('investorDto','Required parameter requestParameters.investorDto was null or undefined when calling updateInvestorUsingPUT.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/investor`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvestorDtoToJSON(requestParameters.investorDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvestorDtoFromJSON(jsonValue));
    }

    /**
     * Update investor
     */
    async updateInvestorUsingPUT(requestParameters: UpdateInvestorUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<InvestorDto> {
        const response = await this.updateInvestorUsingPUTRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
