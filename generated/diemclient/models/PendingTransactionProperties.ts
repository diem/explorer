/**
 * Diem Dev API Specification
 * Diem Dev API is REST API for client applications to interact the Diem blockchain. 
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PendingTransactionProperties {
    'type': string;
    /**
    * All bytes data are represented as hex-encoded string prefixed with `0x` and fulfilled with two hex digits per byte.  Different with `Address` type, hex-encoded bytes should not trim any zeros.
    */
    'hash': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": "hex"
        }    ];

    static getAttributeTypeMap() {
        return PendingTransactionProperties.attributeTypeMap;
    }
    
    public constructor() {
    }
}

