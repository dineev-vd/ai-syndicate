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
 * @interface StartupDto
 */
export interface StartupDto {
    /**
     * 
     * @type {string}
     * @memberof StartupDto
     */
    currentStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof StartupDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof StartupDto
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof StartupDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof StartupDto
     */
    targetBudget?: number;
    /**
     * 
     * @type {string}
     * @memberof StartupDto
     */
    title?: string;
}

export function StartupDtoFromJSON(json: any): StartupDto {
    return StartupDtoFromJSONTyped(json, false);
}

export function StartupDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartupDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentStatus': !exists(json, 'currentStatus') ? undefined : json['currentStatus'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'targetBudget': !exists(json, 'targetBudget') ? undefined : json['targetBudget'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function StartupDtoToJSON(value?: StartupDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentStatus': value.currentStatus,
        'description': value.description,
        'domain': value.domain,
        'id': value.id,
        'targetBudget': value.targetBudget,
        'title': value.title,
    };
}

