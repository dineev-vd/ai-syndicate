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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InvestorRegistrationDto
 */
export interface InvestorRegistrationDto {
    /**
     * 
     * @type {string}
     * @memberof InvestorRegistrationDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof InvestorRegistrationDto
     */
    password?: string;
}

export function InvestorRegistrationDtoFromJSON(json: any): InvestorRegistrationDto {
    return InvestorRegistrationDtoFromJSONTyped(json, false);
}

export function InvestorRegistrationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvestorRegistrationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function InvestorRegistrationDtoToJSON(value?: InvestorRegistrationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

