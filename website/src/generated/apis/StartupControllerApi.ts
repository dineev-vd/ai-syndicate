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
    StartupDto,
    StartupDtoFromJSON,
    StartupDtoToJSON,
} from '../models';

export interface CreateNStartupsUsingPOSTRequest {
    amount: number;
}

export interface CreateStartupUsingPOSTRequest {
    startupDto: StartupDto;
}

export interface DeleteStartupUsingDELETERequest {
    id: string;
}

export interface GetStartupUsingGETRequest {
    id: string;
}

export interface UpdateStartupUsingPUTRequest {
    startupDto: StartupDto;
}

/**
 * 
 */
export class StartupControllerApi extends runtime.BaseAPI {

    /**
     * Creates N random startupssss
     */
    async createNStartupsUsingPOSTRaw(requestParameters: CreateNStartupsUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<StartupDto>>> {
        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new runtime.RequiredError('amount','Required parameter requestParameters.amount was null or undefined when calling createNStartupsUsingPOST.');
        }

        const queryParameters: any = {};

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/startups/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StartupDtoFromJSON));
    }

    /**
     * Creates N random startupssss
     */
    async createNStartupsUsingPOST(requestParameters: CreateNStartupsUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<StartupDto>> {
        const response = await this.createNStartupsUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates startup
     */
    async createStartupUsingPOSTRaw(requestParameters: CreateStartupUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StartupDto>> {
        if (requestParameters.startupDto === null || requestParameters.startupDto === undefined) {
            throw new runtime.RequiredError('startupDto','Required parameter requestParameters.startupDto was null or undefined when calling createStartupUsingPOST.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/startups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StartupDtoToJSON(requestParameters.startupDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StartupDtoFromJSON(jsonValue));
    }

    /**
     * Creates startup
     */
    async createStartupUsingPOST(requestParameters: CreateStartupUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StartupDto> {
        const response = await this.createStartupUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes startup by id
     */
    async deleteStartupUsingDELETERaw(requestParameters: DeleteStartupUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StartupDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteStartupUsingDELETE.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/startups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StartupDtoFromJSON(jsonValue));
    }

    /**
     * Deletes startup by id
     */
    async deleteStartupUsingDELETE(requestParameters: DeleteStartupUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StartupDto> {
        const response = await this.deleteStartupUsingDELETERaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all startups
     */
    async getAllStartupsUsingGETRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<StartupDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/startups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StartupDtoFromJSON));
    }

    /**
     * Get all startups
     */
    async getAllStartupsUsingGET(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<StartupDto>> {
        const response = await this.getAllStartupsUsingGETRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get startup by id
     */
    async getStartupUsingGETRaw(requestParameters: GetStartupUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StartupDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getStartupUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/startups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StartupDtoFromJSON(jsonValue));
    }

    /**
     * Get startup by id
     */
    async getStartupUsingGET(requestParameters: GetStartupUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StartupDto> {
        const response = await this.getStartupUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates startup
     */
    async updateStartupUsingPUTRaw(requestParameters: UpdateStartupUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StartupDto>> {
        if (requestParameters.startupDto === null || requestParameters.startupDto === undefined) {
            throw new runtime.RequiredError('startupDto','Required parameter requestParameters.startupDto was null or undefined when calling updateStartupUsingPUT.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/startups`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StartupDtoToJSON(requestParameters.startupDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StartupDtoFromJSON(jsonValue));
    }

    /**
     * Updates startup
     */
    async updateStartupUsingPUT(requestParameters: UpdateStartupUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StartupDto> {
        const response = await this.updateStartupUsingPUTRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
