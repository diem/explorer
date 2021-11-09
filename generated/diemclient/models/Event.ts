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

/**
* Event `key` and `sequence_number` are global identifier of the event.  Event `sequence_number` starts from 0 for each event key.  Event `type` is the type information of the event `data`, you can use the `type` to decode the `data` JSON.
*/
export class Event {
    /**
    * Event `key` is a global index for an event stream.  It is BCS serialized bytes of `EventHandle` `guid` field, which is a combination of a `uint64` creation number and account `address` (without trimming leading zeros) values.  For example, event key `0x00000000000000000000000000000000000000000a550c18` is combined by the following 2 parts:   1. `0000000000000000`: `uint64` representation of `0`.   2. `0000000000000000000000000a550c18`: 16 bytes of account address.
    */
    'key': string;
    /**
    * Event `sequence_number` is unique id of an event in an event stream.  Event `sequence_number` starts from 0 for each event key.
    */
    'sequenceNumber': string;
    'type': string;
    'data': ;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": "hex"
        },
        {
            "name": "sequenceNumber",
            "baseName": "sequence_number",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
    
    public constructor() {
    }
}

